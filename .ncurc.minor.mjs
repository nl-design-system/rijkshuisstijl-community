import patchConfig from './.ncurc.patch.mjs';

export default {
  ...patchConfig,
  reject: [...patchConfig.reject],
  target: 'minor',
};
