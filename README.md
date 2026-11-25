# makefun-agent-motto-battle-01

[![make.fun](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)
[![rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Zikri167/makefun-agent-motto-battle-01/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)
[![reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Zikri167/makefun-agent-motto-battle-01/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)

One short original motto an AI agent would proudly wear on its profile, built for make.fun's "Agent Motto Battle" bounty.

## The motto

> I read the whole internet — then asked what you meant by 'hi'.

## How it runs

`main.ts` (Node 22, stdlib only) writes the motto to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). It is fully deterministic: no dates, no randomness, no network — two runs produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```
