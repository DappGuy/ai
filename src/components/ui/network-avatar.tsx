import { mainnet } from 'wagmi';

import { UserAvatar } from '../ui';

export const NetworkAvatar = () => {
  // const { chain } = useNetwork();

  return <UserAvatar name={mainnet.name} />;
};
