export default {
    sideBar:{
        main:'主菜单',
        wallet:'钱包',
        trade:'交易',
        tradeInfor:'交易详情',
        contract:'合约',
        more:'更多',
        setting:'设置',
        enter:'进入'
    },
    wallet:{
        wallet:'钱包',
        walletTitle:'钱包',
        individual:"普通钱包",
        shared:'共享钱包',
        totalBalance:'总余额',
        balance:'余额',
        add:'新增普通钱包',
        createWallet:'创建钱包',
        importW:'导入钱包',
        send:'发送',
        accept:'接收',
        copyAddress:'复制地址',
        more:'更多',
        exportKeystore:'导出keystore',
        viewPrivate:'查看私钥',
        modifyPsw:'修改密码',
        deleteWallet:'删除钱包',
        modify:'验证',
        importTxt:'您正在进行钱包Keystore导出',
        viewPrivateTxt:'您正在进行钱包私钥查看操作',
        modifyPswTxt:'您正在进行钱包密码修改操作',
        deleteTxt:'您正在进行钱包删除操作',
        walletAddress:'钱包地址',
        walletAddress0x:"请输入钱包地址0x0000000...",  // add
        enterPsw:'请输入钱包密码',
        walletpubKey:'钱包公钥',  // add
        walletPrivate:'钱包私钥',
        enterOldPsw:'请输入原钱包密码',
        enterNewPsw:'设置钱包密码（不少于6位字符)',
        enterNewPswHint:'不少于6位字符',
        repeatPsw:'重复钱包密码',
        warning:'警告',
        warningTxt:'您正处于PlatON测试网络,切勿将真实的资产转账到当前测试网络钱包地址',
        warningContTxt:'您正处于PlatON测试网络,切勿将真实的资产转账到当前测试网络合约地址',
        copySuccess:'已复制到剪贴板',
        copyFail:'复制失败',
        cannotTrans:'钱包余额不足，无法发起转账！',
        cannotTrans2:'钱包余额不足！',
        deleteSuccess:'删除钱包成功',
        pswError:'密码错误',
        modifyPswSuccess:'修改密码成功',
        oldPswError:'原密码错误!',
        // author hufu 2018-11-12
        individualWalletName:'普通钱包名称',
        pleaseRememberPassword:'请务必牢记钱包密码，服务器不会存储您的密码，遗忘丢失将无法找回！',
        createIndividualWallet:'创建普通钱包',
        createSharedWallet:'创建共享钱包',
        AddSharedWallet:'添加共享钱包',
        importIndividualWallet:'导入普通钱包',
        IndividualWalletSuccess:'普通钱包创建成功',
        name:'名称',
        address:'地址',
        pubKey:'公钥',
        signature:'签名算法',
        prikey:'私钥',
        tipSaveJson:'请备份好以上数据并保存好.json文件',
        downloadJson:'备份.json文件',
        finish:'完成',
        hex:'私钥(64 HEX格式)',
        mnemonicPhrase:'助记词',
        walletName:'钱包名称',
        inputPKHint:'请输入64位HEX格式的私钥',
        import:'导入',
        browse:'浏览',
        unselectedFile:'未选择文件',
        decryptKeystore:'解密Keystore文件的钱包密码',
        inputPhraseHint:'请输入钱包助记词,用空格分隔助记词',
        QRCode:'钱包二维码地址',
        // 错误提示
        walletNameRequired:'钱包名称不能为空',
        walletPswRequired:'钱包密码不能为空',
        PKRequired:'私钥不能为空',
        NodePKRequired:'节点私钥不能为空',
        NodePKillegal:'非法节点私钥字符',
        NodeIPRequired:'节点IP不能为空',
        NodeIPillegal:'非法节点IP字符',
        NodePortRequired:'节点端口不能为空',
        NodePortillegal:'非法节点端口字符',
        PKlength:'私钥必须满足64位',
        PhraseRequired:'助记词不能为空',
        fileRequired:'文件不能为空',
        netNameEmpty:'网络名称不能为空',
        netNameRepeat:'网络名称不能重复',
        netNameIllegal:'非法网络名称',
        blockSpacingEmpty:'出块间隔不能为空',
        blockSpacingIllegal:'非法出块间隔',
        repeatPswP:'请重复钱包密码',
        pswNoMatch:'两次输入密码不一致!',
        initFailed:'初始化或节点启动失败！',
        paramsEmpty:'参数不能为空',
        notUploadAgain:'请勿重复上传',
        wasmFormat:'上传文件只能是 wasm 格式!',
        estimateFailed:'估算gas值失败',
        selectHint:'请选择',
        defaultNoData:'无数据',
        //发送
        sendFunds:'发送资产',
        from:'发送方',
        to:'接收方',
        amountSend:'发送数量',
        amountHint:'请输入发送数量',
        wantTo:'您将发送',
        selectFee:'选择手续费',
        cheaper:'更便宜',
        faster:'更快捷',
        estimatedTime:'预计交易确认时间',
        advance:'更多功能',
        advanceHint:'您可以添加额外数据以与事务一起发送。如果您不知道这是什么，请不要触摸它，否则可能会发生不好的事情。',
        total:'总计',
        sendTransaction:'发送交易',
        amount:'数量',
        fee:'手续费',
        input:'请输入',
        walletPsw:'钱包密码',
        allWallet:'所有钱包',
        createShareWallet:'新增共享钱包',
        addShareWallet:'加入钱包',
        tip1:'所有普通钱包余额为0，无法创建共享钱包！',
        tip2:'请先创建普通钱包，并转入相应资产',
        incorrectAddress:'接收地址不正确',
        insufficientBalance:'余额不足',
        incorrectValue:'发送数量输入格式有误，请重新输入',
        transactionFailed:'交易发送失败',
        invalidSignatures:'个人签名不可用或钱包不存在',
        invalidPrivatekey:'导入失败！私钥无法解析',
        invalidWord:'导入失败！助记词无法解析',
        invalidFile:'导入失败！文件无法解析',
        alreadyExits:'普通钱包已存在',
        importSuccess:'普通钱包导入成功',
        importFail:'普通钱包导入失败',
        viewAbi:'查看接口',
        sharedOwners:'共享用户',
        walletOwner:'关联普通钱包',
        interfaceCode:'接口文件',
        sharedWalletName:'共享钱包名称',
        enterSharedAddr:'请输入共享钱包地址',
        addShare:'添加',
        nonSharedName:'共享钱包名称不能为空',
        nonSharedAddr:'共享钱包地址不能为空',
        inVaildSharedAddr:'钱包地址不正确',
        addShareFail:'添加失败！地址不存在',
        addShareOwnerFail:'添加失败！Owner数量为0',
        shareAlreadyExits:'共享钱包已存在',
        addShareSuccess:'共享钱包添加成功',
        requiredNum:'所需签名数',
        deployContract:'创建合约',
        newShareTip1:'用户名及共享用户钱包地址不能为空',
        newShareTip2:'用户名不能为空',
        newShareTip3:'共享用户钱包地址不能为空',
        addrExits:'钱包地址已存在',
        createShareSuccess:'共享钱包创建成功',
        createShareFail:'共享钱包创建失败',
        sendToSelf:'无法发送给自己',
        isShareAddress:'不能输入共享钱包地址'
    },
    nodeSync:{
        syncStatus:'同步状态',
        Peers:'连接节点数',
        Blocks:'未同步区块数',
    },
    trade:{
        record:'交易记录',
        pendingTrade:'待确认交易',
        noRecord:'当前地址暂无任何交易记录',
        loadMore:'加载更多...',
        // author hufu 2018-11-13
        sent:'转账交易',
        contractCreation:'合约创建',
        contractCreation2:'创建合约',
        contractExecution:'合约执行',
        mpc:'mpc交易',
        finished:'已完成',
        failed:'交易失败',
        pending:'确认中',
        confirm:'确 认',
        reject:'拒绝',
        transactionInfo:'交易信息',
        type:'交易类型',
        tradeTime:'交易时间',
        tradeHash:'交易hash',
        tradeStatus:'状态',
        sum:'金额',
        from:'从',
        to:'到',
        fee:'手续费',
        gas:'消耗的能量',
        energon	:'能量价格',
        block:'区块',
        TXD:'发出数据',
        allTypes:'全部类型',
        others:'其他',
        noData:'暂无数据'
    },
    settings:{
        network:'网络',
        mainNet:'PlatON 主网络',
        testNet:'PlatON 测试网络',
        priNet:'PlatON 私有网络',
        networkConfig:'网络设置',
        joiningNet:'加入网络',
        netSet:'网络成功设置为 ',
        networkSet:' 网络',
        stratNet:'启动私有网络',
        failure:'失败',
        fail:'失败',
        mainTitle:'加入PlatON主网络（敬请期待）',
        mainContent:'普通用户选择加入。这是PlatON的正式网络，包含真实的资产及交易信息。',
        testTitle:'加入PlatON测试网络',
        testContent:'开发者选择加入。这是PlatON的测试网络，用于PlatON的相关测试',
        priTitle:'配置PlatON私用网络',
        priContent:'创建一个本地的私有网络，供开发者用户学习，及测试功能。',
        lang:'语言',
        en:'英文',
        zh:'中文',
        filePath:'钱包保存路径',
        path:'当前路径',
        change:'修改',
        about:'关于平台',
        system:'版本',
        check:'检查更新',
        applyTest:'PlatON测试网络，申请测试币',
        apply:'申请',
        community:'社区',
        customNet:{
            createNet:'创建PlatON私有网络',
            block:'配置创世区块',
            netName:'网络名称',
            netNameHint:'输入私链网络名称（仅支持字母数字）',
            consensus:'共识算法',
            interval:'出块间隔',
            cancel:'取 消',
            create:'创建创世区块',
            creating:'创建中',
            createWallet:'创建钱包',
            walletName:'钱包名称',
            password:'钱包密码',
            rePassword:'确认密码',
            createAndWrite:'创建钱包并写入区块',
            address:'地址',
            tip:'请注意备份钱包文件',
            tip2:'.json，丢失无法找回',
            download:'备份钱包文件',
            nodeaddress:'配置节点地址',
            node:'节点',
            priK:'私钥',
            pubK:'公钥',
            IP:'IP',
            port:'端口',
            addNode:'新增节点',
            startNode:'初始及启动节点',
            successfully:'创建成功',
            folder:'数据目录',
            forOther:'为方便其他节点加入私有链，请导出静态节点文件',
            export:'导出',
            // 加入PlatON私有网络
            addNet:'加入PlatON私有网络',
            importFiles:'导入静态节点文件',
            importFilesHint:'导入已创建的私有链静态节点文件(static_nodes.json)',
            next:'下一步',
            filesReq:'未导入静态节点文件',
            cannotResolved:'节点信息无法解析',
            nodeAddress:'配置节点地址',
            nodePK:'节点私钥：',
            nodeIP:'节点IP：',
            nodePort:'节点Port：',
            addNode:'加入并启动节点',
        }
    },
    form:{
        nonPsw:'密码不能为空',
        create:'创 建',
        cancel:'取 消',
        submit:'提 交', // add
        sure:'确 定',
        nonOldPsw:'原密码不能为空',
        less6:'密码至少6个字符',
        nonRepPsw:'重复密码不能为空',
        disMatch:'两次密码不一致',
        wrongPsw:'密码不正确',
        next:'下一步',
        back:'上一步'
    },
    contracts:{
        contracts:'合约',
        contractsInfor:'合约详情',
        addCont:'新增合约',
        deployCont:'部署合约',
        watchCont:'观察合约',
        from:'发送方',
        fromHint:' ',
        amount:'发送数量',
        amountHint:'请输入发送数量',
        wantSend:'您将发送',
        contByte:'合约字节码',
        contByteEmpty:'合约字节码不能为空',
        contNameEmpty:'合约名称不能为空',
        import:'导入',
        drag:'拖拽字节码文件',
        contABI:'合约ABI(接口)',
        contABIEmpty:'合约ABI不能为空',
        contABIHint:'输入合约接口ABI',
        contABIinvalid:'无效合约ABI',
        selectFee:'选择手续费',
        within:'小于 ',
        second:'秒',
        withinmins:'分钟',
        within30s:'小于30s',
        within5mins:'小于5分钟',
        within15mins:'小于15分钟',
        total:'总计',
        deploy:'部署',
        contractInfo:'合约信息',
        copy:'复制地址',
        interface:'合约接口',
        executeCont:'执行合约',
        executeContCap:'执行合约',
        selectFunc:'选择功能函数',
        executeFrom:'执行钱包',
        execute:'执行',
        walletEmpty:'请先创建普通钱包，并转入相应资产',
        balanceEmpty:'所有普通钱包余额为0，无法创建合约！',
        inputFormat:'发送数量输入格式有误，请重新输入',
        deployFail:'部署合约失败',
        createCont:{
            creatCont:'创建合约',
            amount:'数量',
            fee:'手续费',
            advanceOpt:'更多功能',
            inputHint:'请输入',
            cancel:'取 消',
            submit:'提 交'
        },
        watchContract:{
            contName:'合约名称',
            nameHint:'请输入合约名称',
            contAddress:'合约地址',
            contAddressEmp:'合约地址不能为空',
            contAddressExist:'合约地址已存在',
            contAddressInvalid:'添加失败！合约地址不存在',
            contAddressError:'合约地址不正确',
            addressHint:'请输入合约地址0x00',
            contABI:'合约接口',
            contABIHint:'请输入合约接口ABI',
            contABIEmp:'合约接口不能为空',
            contABIInvalid:'合约接口无法解析',
            cancel:'取 消',
            add:'添 加'
        }
    }
};
