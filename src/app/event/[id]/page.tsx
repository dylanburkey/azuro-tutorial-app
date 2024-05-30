'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useGame, useGameMarkets, useGameStatus, GameStatus } from '@azuro-org/sdk'
import { GameInfo, GameMarkets } from '@/components'
import exp from 'constants'

type Game = {
  markets: any // Replace 'any' with the actual type of 'markets'
}

type MarketsProps = {
  gameId: string
  gameStatus: GameStatus
}

const Markets: React.FC<MarketsProps> = ({ gameId, gameStatus }) => {
  const [markets, setMarkets] = useState<Game['markets'] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const UsefetchData = async () => {
      const { markets } = await useGameMarkets({ gameId, gameStatus })
      setMarkets(markets)
      setLoading(false)
    }
    UsefetchData()
  }, [gameId, gameStatus])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!markets) {
    return null
  }

  return <GameMarkets markets={markets} />
}

export default function GamePage() {
  const { gameId } = useParams()
  const { game, loading } = useGame({ gameId })
  const gameStatus = useGameStatus({ gameId })

  if (loading) {
    return <div>Loading...</div>
  }

  if (!game) {
    return <div>Game not found</div>
  }

  return (
    <>
      <GameInfo game={game} />
      <Markets gameId={gameId} gameStatus={gameStatus} />
    </>
  )
}

