import { HttpRpcClient } from '@account-abstraction/sdk';
import { sepolia } from 'wagmi/chains';

import { BUNDLER_URL } from '@/config/constants';
import { ENTRYPOINT_ADDRESS } from '@/config/contracts';

const sepolia_CHAIN_ID = sepolia.id;

export const bundlerClient = new HttpRpcClient(BUNDLER_URL, ENTRYPOINT_ADDRESS, sepolia_CHAIN_ID);
