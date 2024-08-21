import React, { useState, memo } from 'react';
import { AppstoreOutlined, EditOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const { Header, Sider, Content } = Layout;

const Admin = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
    const siderItemActive = `w-[${collapsed ? '33px' : '320px'}] hover:text-black p-3 flex items-center justify-center text-lg gap-4 mx-auto bg-blue-500 font-semibold rounded-md text-[#000]`
    const siderItem = `w-[${collapsed ? '33px' : '320px'}] p-3 flex items-center justify-center text-lg gap-4 mx-auto bg-transparent font-semibold rounded-md text-white`

    return (
        <section className='w-full mx-auto'>
            <Layout className='w-full min-h-[955px]'>
                <Sider trigger={null} collapsible width={320} collapsed={collapsed}>
                    <div className={`w-[${collapsed ? '30%' : '320px'}] h-full fixed flex flex-col items-start justify-start gap-2 `} >
                        <h1 onClick={() => navigate('/admin/profile')} className={`w-full cursor-pointer h-[64px] flex items-center
                        justify-center gap-4 text-lg font-bold text-white bg-transparent border-b-[.1px] border-gray-400`}>
                            <span className='w-[40px] h-[40px] font-bold flex items-center
                            justify-center rounded-full bg-blue-500'>{user?.fname.split('')[0]}</span>
                            <span className={collapsed ? 'hidden' : 'block'}>{user?.fname} {user?.lname}</span>
                        </h1>
                        <div className="w-full mt-4 flex flex-col items-start justify-center gap-2">
                            <NavLink to={'/admin/dashboard'} className={pathname === '/admin/dashboard' ? siderItemActive : siderItem}>
                                <AppstoreOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Dashboard</span>
                            </NavLink>
                            <NavLink to={'/admin/create-product'} className={pathname === '/admin/create-product' ? siderItemActive : siderItem}>
                                <EditOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Create Product</span>
                            </NavLink>
                            <NavLink to={'/admin/manage-product'} className={pathname === '/admin/manage-product' ? siderItemActive : siderItem}>
                                <QrcodeOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Manage Product</span>
                            </NavLink>
                            <NavLink to={'/admin/create-category'} className={pathname === '/admin/create-category' ? siderItemActive : siderItem}>
                                <EditOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Create Category</span>
                            </NavLink>
                            <NavLink to={'/admin/manage-category'} className={pathname === '/admin/manage-category' ? siderItemActive : siderItem}>
                                <QrcodeOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'flex-1'}`}>Manage Category</span>
                            </NavLink>
                        </div>
                        <Button className={`w-full font-bold text-red-600 items-center justify-center absolute bottom-4 ${collapsed ? 'hidden' : 'flex'}`} type="link"
                            onClick={() => dispatch(logout())} size="large">
                            <span> <LogoutOutlined style={{ fontSize: '20px' }} /> </span>
                            <span className={`text-lg`}>Logout</span>
                        </Button>
                    </div>
                </Sider>
                <Layout>
                    <Header className='border-b-[1px] border-gray-300' style={{ padding: 0, background: colorBgContainer, }} >
                        <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64, }}
                        />
                    </Header>
                    <Content className='bg-[#f1f1f1]' style={{ margin: '24px 16px', padding: 24, minHeight: 280, borderRadius: borderRadiusLG, }} >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </section >
    )
}

export default memo(Admin)