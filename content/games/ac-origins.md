---
slug: ac-origins
title: Assassin's Creed® Origins
steam_appid: 582160
compatibility:
  - name: fitgirl
    windows: true
    steamos: false
  - name: dodi
    windows: true
    steamos: false
  - name: xatab
    windows: true
    steamos: true
    proton_tested: [lutris-GE-Proton8-26-x86_64]

description:
---
Only works at steamos if have grub patch available here [grub patch](https://github.com/pdx-rico/hogwarts-steamdeck-fix)

if not apply the patch will not work with compatibility layer, only working at windows

For HDR to work (by default its greyed out in the game settings) add PROTON_ENABLE_AMD_AGS=1 %command% as a launch command.

Dynamic Resolution - 45FPS

Settings - Use the global setting -high medium, then change Anti Aliasing to - Medium Adaptive, Depth of field - Off

Set in game FPS limit to 45, leave the decks FPS limit to max.

Set the resolution scale to 90%
