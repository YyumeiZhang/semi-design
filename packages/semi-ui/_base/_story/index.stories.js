import React, { useMemo } from 'react';
import { Button, Typography, Card, Tooltip, Tag, Avatar, Rating, Nav, Layout, Space, Popover, Input } from '../../index';
import { IconHelpCircle, IconUser, IconStar, IconSetting } from '@douyinfe/semi-icons';
import SemiA11y from './a11y';
import './index.scss';

export default {
  title: 'Base',
};

export {
  TestAlwaysDarkLight,
  SemiA11y
};

const TestAlwaysDarkLight = () => {
  function Demo() {
    const { Text } = Typography;
    const { Header, Footer, Sider, Content } = Layout;

    const switchMode = () => {
      const body = document.body;
      if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
        // 通知官网更新当前模式，下同
        // window.setMode("light");
      } else {
        body.setAttribute('theme-mode', 'dark');
        // window.setMode("dark");
      }
    };
    const opts = {
      content: 'Hi, Bytedance dance dance',
      duration: 3,
    };

    const blocks = title => (
      <Layout>
        <Header style={{ height: 60 }}>Header</Header>
        <Layout style={{ height: 'calc(100vh - 260px)' }}>
          <Sider style={{ background: 'var(--semi-color-white)' }}>
            <div class="semi-always-light">
              <Nav
                style={{ background: 'var(--semi-color-white)' }}
                // bodyStyle={{ height: '100%' }}
                items={[
                  { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
                  { itemKey: 'union', text: '公会中心', icon: <IconStar /> },
                  {
                    text: '任务平台',
                    icon: <IconSetting />,
                    itemKey: 'job',
                    items: ['任务管理', '用户任务查询'],
                  },
                ]}
                onSelect={data => console.log('trigger onSelect: ', data)}
                onClick={data => console.log('trigger onClick: ', data)}
              />
            </div>
          </Sider>
          <Content>
            <Card
              title={`Semi Design ${title}`}
              style={{ maxWidth: 360, marginRight: 12 }}
              headerExtraContent={<Text link>更多</Text>}
            >
              Semi Design 是由互娱社区前端团队与 UED
              团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
              Web 应用。
              <Tooltip content={'hi bytedance'}>
                <IconHelpCircle />
              </Tooltip>
            </Card>
            <div>
              <div>
                <Avatar style={{ margin: 4 }}>AS</Avatar>
                <Avatar color="red" style={{ margin: 4 }}>
                  BM
                </Avatar>
                <Avatar color="light-blue" style={{ margin: 4 }}>
                  TJ
                </Avatar>
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', margin: 4 }}>
                  ZL
                </Avatar>
                <Avatar style={{ backgroundColor: '#87d068', margin: 4 }}>YZ</Avatar>
              </div>
              <Tag> default tag </Tag>
              <Rating defaultValue={5} />
            </div>
          </Content>
        </Layout>
        <Footer
          style={{
            height: 200,
            background: 'var(--semi-color-black)',
            color: 'var(--semi-color-white)',
          }}
        >
          Footer
        </Footer>
      </Layout>
    );

    return (
      <div className="container">
        <div>
          <Button onClick={switchMode}>Switch Mode</Button>
        </div>
        <div>
          <div>{blocks('default')}</div>
          {/* <div id="semi-always-dark">{blocks('always dark')}</div>
                    <div id="semi-always-light">{blocks('always light')}</div> */}
        </div>
      </div>
    );
  }

  return <Demo />;
};

export const A11yKeyboard = () => {
  const renderContent = ({ setInitialFocusRef }) => {
    return (
      <div style={{ height: 200, width: 200 }}>
        <button>button</button>
        <a href="https://semi.design">link2</a>
        {/* <input ref={setInitialFocusRef} placeholder="init focus" /> */}
        <input placeholder="" />
        <a href="https://semi.design">link</a>
        <button>button2</button>
      </div>
    );
  };

  return (
    <div style={{ paddingLeft: 100, paddingTop: 100 }}>
      <Space>
        <Popover content={renderContent} trigger="click">
          <Button>click</Button>
        </Popover>
        <Popover content={renderContent} trigger="hover">
          <span>hover</span>
        </Popover>
        <Popover content={renderContent} trigger="focus">
          <Input value="focus" />
        </Popover>
      </Space>
    </div>
  );
};
A11yKeyboard.storyName = "a11y keyboard and focus";