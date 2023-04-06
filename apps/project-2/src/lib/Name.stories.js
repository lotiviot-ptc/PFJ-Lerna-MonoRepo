import Name from '@lotivio-org-test/pfj-svelte-package'
import Name003 from '@lotivio-org-test/pfj-svelte-package-0.0.3'

export default {
    component: Name,
    title:'Name Component',
  };

export const V1 = {
  name:'Version-1.0.0',
  render: () => ({
    Component: Name,
    
    props: {
      primary: true,
      label: 'Button',
    },
  }),
};

export const V2 = {
  name:'Version-0.0.3',
  render: () => ({
    Component: Name003,
    props: {
      primary: true,
      label: 'Button',
    },
  }),
};
