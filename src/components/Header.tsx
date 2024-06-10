'use client'

import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { SelectAppChain } from './SelectAppChain'
import { LiveSwitcher } from './LiveSwitcher'
import Image from 'next/image'



export function Header() {

  return (
    <header role='banner' className="container flex items-center py-3.5 border-b border-zinc-200">
      <a href="/">
      <div className="custom-title">
       <figure className="dg-logo flex items-center" style={{ flexDirection: 'column' }} >
        <Image
          src="https://www.dgbet.fun/dgbet-logo.png"
          alt="DGBet Bet Big and Win Big"
          title="DGBet Bet Big and Win Big"
          width={150}
          height={50}
          data-type="logo"
          loading="eager"
        />
          <figcaption className="dg-logo_caption text-sm">powered by <strong>azuro</strong></figcaption>
        </figure>

      </div>
      </a>
      <nav className="flex ml-10 nav">
        <Link
          className="text-zinc-500 hover:text-black transition"
          href="/events/top"
        >
          Events
        </Link>
        <Link
          className="text-zinc-500 hover:text-black transition ml-4"
          href="/bets"
        >
          Bets History
        </Link>
        <Link
          className="text-zinc-500 hover:text-black transition ml-4"
          href="/leaderboard">
          Azuro Score
        </Link>
      </nav>
      <div className="ml-auto flex items-center">
        <LiveSwitcher />
        <SelectAppChain />
        <ConnectButton chainStatus="none" />
      </div>
    </header>
  )
}
