'use client'
import { useEffect, useBets, OrderDirection } from '@azuro-org/sdk';
import { useAccount } from 'wagmi';
import { BetCard, RedeemAll } from '@/components';

export default function Bets() {
  const { address } = useAccount();
  const { loading, data } = useBets({
    filter: {
      bettor: address!,
    },
    orderDir: OrderDirection.Desc,
  });

  useEffect(() => {
    // Additional logic or side effects can be added here
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data?.length) {
    return <div>You don&apos;t have bets yet</div>;
  }

  return (
    <div>
      <RedeemAll bets={data} />
      {data.map((bet) => (
        <BetCard key={`${bet.createdAt}-${bet.tokenId}`} bet={bet} />
      ))}
    </div>
  );
}
