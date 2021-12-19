module.exports={
    configureWebpack:{
        resolve:{
            //    配置别名
            alias:{
                // '@':'src' 这句是已经配置好的
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}
