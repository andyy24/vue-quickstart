import Http from './http'
export default {
    getMenu() {
        return Http
            .get('/menu', {
                adapter: (config) => {
                    return new Promise((rs, rj) => {
                        rs({
                            data: [
                                { name: '用户管理', sub: '导航一', index: 'menu1', componentPath: '@/components/AdminHome/UserManager.vue' },
                                { name: '菜单二', sub: '导航二', group: '分组一', index: 'menu2' },
                                { name: '菜单二', sub: '导航二', group: '分组二', index: 'menu4' },
                                { name: '菜单三', index: 'menu3' },
                                { name: '菜单五', group: '分组二', index: 'menu3' },
                            ],
                            status: 200
                        })
                    })
                }
            })
    }
}