---
title: My IDE to PDE Journey so Far
description: This post details my journey from VSCode to Neovim.
  I will be rumbling about my reasoning and experience on this.
  Hopefully this inspires you to explore other IDEs out there
  and maybe convince you to join the NeoVim "cult".
date: '2023-09-23'
categories:
  - Neovim
  - VSCode
  - IDE
  - PDE
published: true
---

## Intro

I started off as a systems engineer in my career. Thankfully this has made me into a developer thats very comfortable using the command line. The early days of my career were spent writing bash scripts maintaining a very big UNIX environment supporting Peoplesoft for the enterprise. Funny enough during this times I got familliar with VI and at that time i hated it. I was just fresh out of college and all I knew was Visual Studio 🤢.

## Needing Change

So I was at a part of my career where learning was no longer fun. I had been stuck doing a 9 to 5 and honestly starting to get burntout. I was a bit confused honestly and I was looking for a change. I was looking for something I could use and learn how to use. I was looking for something that would help me be productive and not just be a slave to the mouse and keyboard.

## Exploring Neovim Community

I started exploring NVim distros. I started with [NVChad](https://github.com/NvChad/NvChad), this config is very fleshed out, too fleshed out for my liking. It also didn't help that I can't just quick google thing in order to add on to it (yes I know should have went to discord 😅). But that factor made it a barrier of entry for me that Im too lazy to break. On hindsight NVChad is quite nice once I got used to the fundamentals.

I then switched over to [LazyVim](https://github.com/folke/lazy.nvim). This one I liked, because the way its configured is very google friendly. During the time of my switch the NeoVim community was in the midst of changing extension/package managers from packer to lazy. It helps that the guy who made lazy also made this config, so it follows the newest hyped package manager's standards. I liked my time with it but I wanted more! More Customizations! More Granular Control!

## Getting into the Rabbit Hole

Fresh from my dive in LazyVim I started doing research, watching youtube tech influencers on what was the right way to go about this. After watching [ThePrimeagens VimMotions](https://www.youtube.com/watch?v=qZO9A5F6BZs) video I was instantly hooked it was ✨**magic**✨. I thought to myself maybe I could use this professionally instead of just "exploring" and finally ditch VSCode.

From my previous exploration I knew that I want to do a custom configuration instead, I value the freedom and ability to control how I do things. I want my own keybinds that make sense to my head and I want to only have the plugins I use and want.

I started by watching the resources below.

- [0 to LSP: Neovim RC From Scratch](https://www.youtube.com/watch?v=w7i4amO_zaE&t=12s)
- [How I Setup Neovim On My Mac To Make It Amazing - Complete Guide](https://www.youtube.com/watch?v=vdn_pKJUda8&t=3515s)
- [Effective Neovim: Instant IDE](https://www.youtube.com/watch?v=stqUbv-5u2s)

Now these resources made me want to go further and explore more. I wanted to know how other people do it and what is the best way to do it. I wanted to know what is the best way to do it. I wanted to know the best way to do it. And at the time when I was learning lazy.nvim was the new thing and all these resources were using packer.

Converting these to packer was hard for me. Since I was trying to hit two birds with one stone, I was forcing myself to use my new NeoVim config on everything, which made things even harder. Good thing reddit and the discord community was very supportive. When I got everything working the way I want it to be which is the number one priority, it felt so good and fullfulling. Learning NeoVim I think restarted my drive to learn again. Even though it took me 3 months to get proficient with it I'm glad I made the switch.

## Conclusion

I've been using neovim for a while now and I'm really enjoying it. My biggest take on this experience is to get out of your comfort zone. Learning and using new tools takes time but is fullfilling at the same time. If youre getting burntout do something, explore, try something new, learn something new. Knowing what it's like to be a beginner is a good thing. This experience made me realize I need to learn more as I know nothing.

Thank you to the tech youtubers who put out great tutorial content on this matter and also to my colleague who introduced me to NVChad. I hope you begin your switch as well.

If you want to see my neovim config just go check this [github repo](https://github.com/ianmarquez/nvim_config). This is a work in progress and am constantly tweaking it to further optimize my workflow and make me a better programmer in the long run. You know what they say you should master your tools.
