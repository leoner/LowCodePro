import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { common, plugins, config } from '@alilc/lowcode-engine';
import './global.scss';
const preference = new Map();

preference.set('DataSourcePane', {
  importPlugins: [],
  dataSourceTypes: [
    {
      type: 'fetch',
    },
    {
      type: 'jsonp',
    }
  ]
});

const Workbench = common.skeletonCabin.Workbench;
const EditView: React.FC = () => {

  useEffect(() => {
    plugins.init(preference).then(() => {
      setHasPluginInited(true);
    }).catch(err => console.error(err));
  }, []);

  /** 插件是否已初始化成功，因为必须要等插件初始化后才能渲染 Workbench */
  const [hasPluginInited, setHasPluginInited] = useState(false);

  return (
    <PageContainer ghost>
      { hasPluginInited && <Workbench />}
    </PageContainer>
  );
};

export default EditView;
