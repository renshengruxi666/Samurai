<template>
    <div class="reduce-stake format-style">
        <div class="reduce-stake-content">
            <p>{{$t('application.reduceStake')}}</p>
            <numberOnly-input class="input-width" :placeholder="$t('application.reduceAmount')" @valueChange="valueChange" :typeInt="false" :inputVal="inputVal"></numberOnly-input>
            <p><span :class="[lang=='en'?'label-txt-en':'label-txt-cn','label-txt']">{{$t('application.maximumAmount')}}</span><span class="value-txt">{{depositList.length>0?depositList[0]:node&&node.Deposit}} Energon</span></p>
            <p><span :class="[lang=='en'?'label-txt-en':'label-txt-cn','label-txt']">{{$t('application.minimumAmount')}}</span><span class="value-txt">{{depositList.length>0?depositList[depositList.length-1]:node&&node.Deposit}} Energon</span></p>
            <p><span :class="[lang=='en'?'label-txt-en':'label-txt-cn','label-txt']">{{$t('application.remainingStake')}}</span><span class="value-txt">{{remaining}}{{remaining>0?' Energon':''}}</span></p>
            <p><span :class="[lang=='en'?'label-txt-en':'label-txt-cn','label-txt']">{{$t('application.expectedRanking')}}</span><span class="value-txt">{{ranking}}</span></p>
            <p class="btn-box">
                <el-button :class="[lang=='zh-cn'?'letterSpace':'']" type="primary" @click="confirm" :disabled="!value">{{$t('form.submit')}}</el-button>
                <el-button :class="[lang=='zh-cn'?'letterSpace':'']" @click="back">{{$t('form.cancel')}}</el-button>
            </p>

        </div>

        <!--超过200名提示-->
        <div class="modal confirm tipModal" v-if="showRankingTip || showRemainTip">
            <div class="modal-main">
                <div class="modal-title">{{$t('application.after200Warn')}}</div>
                <div class="modal-content">
                    {{showRankingTip?$t('application.after200Tip'):$t('application.remainTip')}}
                </div>
                <div class="modal-btn">
                    <el-button :class="[lang=='zh-cn'?'letterSpace':'']" @click="closeModal">{{$t("form.cancel")}}</el-button>
                    <el-button :class="[lang=='zh-cn'?'letterSpace':'']" @click="confirmRanking" type="primary">{{$t("form.submit")}}</el-button>
                </div>
            </div>
        </div>

        <div class="modal confirm" v-if="showConfirm">
            <div class="modal-main">
                <div class="modal-title">
                    {{$t('application.reduceStakeConf')}}
                    <el-button class="modal-close" @click="showConfirm=false" :disabled="handleLoading"></el-button>
                </div>
                <div class="modal-content">
                    <div class="confirm-content">
                        <p>{{$t("application.reduceAmount2")}}<span class="txt">{{value}} Energon</span></p>
                        <p>
                            {{$t("application.nodeWallet")}}
                            <span class="txt">
                                <i :class="['trade-wallet-icon',keyObj.icon]">{{keyObj.account.slice(0,1).toUpperCase()}}</i>
                                {{keyObj.account || node.Owner}}</span>
                        </p>
                        <p>{{$t("wallet.fee")}}<span class="txt">{{price}} Energon</span></p>
                    </div>
                    <p class="inputb">
                        <el-input type="password" :placeholder="$t('wallet.input')+(keyObj?keyObj.account:'')+$t('wallet.walletPsw')" v-model.trim="psw"></el-input>
                    </p>
                </div>
                <div class="modal-btn">
                    <el-button :class="[lang=='zh-cn'?'letterSpace':'']" @click="showConfirm=false">{{$t("form.cancel")}}</el-button>
                    <el-button :class="[lang=='zh-cn'?'letterSpace':'']" @click="send" type="primary" :loading="handleLoading" :disabled="!psw">{{$t("form.submit")}}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import keyManager from '@/services/key-manager';
    import contractService from '@/services/contract-servies';
    import feeSlider from '@/components/feeSlider';
    import mathService from '@/services/math';
    import numberOnlyInput from '@/components/numberOnlyInput';
    var fs = require("fs");
    export default {
        name: 'reduceStake',
        data () {
            return {
                node:null,
                value:null,
                showConfirm:false,
                psw:'',
                depositList:[],
                ranking:'-',
                checkRules:false,
                showRankingTip:false,
                remaining:0,
                keyObj:null,
                gas:0,
                gasPrice:0,
                price:0,
                handleLoading:false,
                inputVal:0,
                showRemainTip:false
            }
        },
        computed: {
            ...mapGetters(['lang','contractAddress'])
        },
        mounted(){
            this.node = this.$route.query;
            this.inputVal=mathService.mul(this.node.Deposit,0.1);
            this.value=mathService.mul(this.node.Deposit,0.1);
            this.remaining = mathService.sub(this.node.Deposit,this.value);
            this.getDepositList().then((data)=>{
                if(data.length>0){
                    let arr = JSON.parse(JSON.stringify(data));
                    arr.push(this.remaining);
                    this.ranking = arr.indexOf(this.remaining)+1;
                }else{
                    this.ranking = 1;
                }
                this.depositList = data;
            });
            this.getWalletByAddress(this.node.Owner).then((keyObj)=> {
                this.keyObj  = keyObj
            });
        },
        methods: {
            ...mapActions(['getDepositList','getWalletByAddress','saveTractRecord']),
            valueChange(value){
                this.value = value;
                if(this.value-0<mathService.mul(this.node.Deposit,0.1)-0){
                    this.value = mathService.mul(this.node.Deposit,0.1);
                }
                this.inputVal = this.value;
                this.getRanking();
            },
            back(){
                this.$router.back();
            },
            confirm(){
                if(this.value==0){
                    this.$message.warning(this.$t('application.stakeNull'))
                }else if(this.ranking>200){
                    this.showRankingTip = true;
                }else if(this.remaining<50000){
                    this.showRemainTip = true;
                }else if(Number(this.value) < Number(mathService.mul(this.node.Deposit,0.1))){
                    this.$message.warning(this.$t('application.cannotBeLess'))
                }else if(Number(this.value) > Number(this.node.Deposit)){
                    this.$message.warning(this.$t('application.OutOfRange'))
                }else{
                    this.getGas().then((gas)=>{
                        // parseInt(mathService.div(contractService.web3.toWei(this.sendTranscation.gas,'ether'),gas));
                        this.gas = gas;
                        this.price = contractService.web3.fromWei(this.gasPrice, "ether")*this.gas;
                        this.showRankingTip = false;
                        this.showRemainTip = false;
                        this.showConfirm=true;
                    }).catch((e)=>{
                        console.log('估算gas值失败',e);
                        this.showRankingTip = false;
                        this.showRemainTip = false;
                        this.showConfirm=true;
                        // this.$message.error('估算gas值失败')
                    });
                }
            },
            getRanking(){
                if(Number(this.value) > Number(this.node.Deposit)){
                    this.$message.warning(this.$t('application.OutOfRange'));
                    this.remaining = '一';
                    this.ranking='一'
                }else{
                    this.remaining = this.node.Deposit - this.value;
                    let arr = JSON.parse(JSON.stringify(this.depositList));
                    arr.push(this.remaining);
                    arr.sort((a,b)=>{
                        return b-a
                    });
                    this.ranking = arr.indexOf(this.remaining)+1;
                }
            },
            closeModal(){
                this.showRankingTip = false;
                this.showRemainTip = false
            },
            confirmRanking(){
                this.showRankingTip = false;
                this.showConfirm=true;
            },
            getGas(){
                return new Promise((resolve, reject)=>{
                        contractService.web3.eth.getGasPrice((e,gasPrice)=>{
                           console.log('getGasPrice--->',e,gasPrice.toString(10));
                           if(e){
                               reject(e)
                           }
                           this.gasPrice = gasPrice.toString(10)-0;
                            resolve(2000000);
                        });
                });
            },
            send(){
                let params=[this.node.CandidateId,Number(contractService.web3.toWei(this.value,"ether"))];
                this.getWalletByAddress(this.node.Owner).then((keyObj)=>{
                    if(!keyObj){
                        this.$message.warning(this.$t('wallet.invalidSignatures'));
                        return;
                    }
                    keyManager.recover2(keyObj,this.psw,'buf',(err,privateKey)=>{
                        if(err){
                            this.$message.error(this.$t('form.wrongPsw'));
                            return;
                        }
                        this.handleLoading = true;
                        contractService.platONSendTransaction(contractService.getABI(2),contractService.appContractAddress,'CandidateApplyWithdraw',JSON.stringify(params),keyObj.address,privateKey,this.gas,this.gasPrice,false,false,1002).then((result)=>{
                            //记录交易
                            let tradeObj={
                                tradeTime:new Date().getTime(),
                                hash:result.hash,
                                value:this.value,
                                gasPrice:this.gasPrice,
                                fromAccount:this.keyObj.account,
                                from:this.keyObj.address,
                                to:contractService.appContractAddress,
                                type:'reduceStake',
                                state:0,
                                nodeId:this.node.CandidateId,
                                nodeName:this.node.Extra.nodeName
                            };
                            this.saveTractRecord(tradeObj).then(()=>{
                                this.$message.success(this.$t('trade.transactionSent'));
                                setTimeout(()=>{
                                    this.showConfirm = false;
                                    this.handleLoading = false;
                                    this.$router.push('/my-node');
                                },3000);
                            }).catch((e)=>{
                                    // this.sendLoading = false;
                                    this.$message.error(this.$t('wallet.transactionFailed'));
                            });

                        }).catch((e)=>{
                            console.log('e',e)
                            this.$message.error(this.$t('application.increaseFail'));
                            this.handleLoading = false;
                        })
                    });
                });
            }
        },
        filters:{

        },
        components:{
            feeSlider,
            numberOnlyInput
        }
    }
</script>

<style lang="less" scoped>
    .reduce-stake-content{
        position: relative;
        padding:20px;
        height:100%;
        font-size: 12px;
        color: #24272B;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 6px 0 rgba(48,48,77,0.05), 0 2px 4px 0 rgba(148,148,197,0.05);
        p{
            margin:14px 0;
        }
        .label-txt{
            display: inline-block;
            color: #525768;
        }
        .label-txt-en{
            width:175px;
        }
        .label-txt-cn{
            width:88px;
        }
        .value-txt{
            color: #000002;
        }
        .btn-box{
            padding-top:20px;
            width:calc(~"100% - 40px");
            border-top:solid 1px #D3D8E1;
            .el-button{
                margin-right:30px;
            }
        }
        .check-box{
            position:absolute;
            bottom:80px;
            a{
                color:#18C2E9;
                text-decoration: underline;
            }
        }
        .input-width{
            width:300px;
        }
    }
    .tipModal{
        .modal-main .modal-content{
            padding:20px 20px 85px;
        }
    }

</style>


