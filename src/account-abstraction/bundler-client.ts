import { HttpRpcClient } from '@account-abstraction/sdk';
import { mainnet } from 'wagmi/chains';

import { BUNDLER_URL } from '@/config/constants';
import { ENTRYPOINT_ADDRESS } from '@/config/contracts';

const ETH_CHAIN_ID = mainnet.id;

export const bundlerClient = new HttpRpcClient(BUNDLER_URL, ENTRYPOINT_ADDRESS, ETH_CHAIN_ID);
