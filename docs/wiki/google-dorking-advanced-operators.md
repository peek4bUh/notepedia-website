---
draft: "true"
language: english
parent: "[Google Dorking](Wiki/google-dorking.md)"
status: incomplete
tags: [wiki]
title: "Google Dorking: Advanced Operators"
---

# Google Dorking: Advanced Operators

The **advanced operators** allow you to refine searches, they can me mixed together to display more specific results:

| Operator                                                | Mixes with other operators? | Can be used alone? | Does search work in Web? | Does search work in Images? | Does search work in Groups? | Does search work in News? |
| ------------------------------------------------------- | --------------------------------- | ------------------------ | ------------------------ | --------------------------- | --------------------------- | ------------------------- |
| [intitle](google-dorking-advanced-operator-intitle%5C)   | yes                               | yes                      | yes                      | yes                         | yes                         | yes                       |
| allintitle                                              | no                                | yes                      | yes                      | yes                         | yes                         | yes                       |
| [inurl](google-dorking-advanced-operator-inurl%5C)       | yes                               | yes                      | yes                      | yes                         | not really                  | like intitle              |
| allinurl                                                | no                                | yes                      | yes                      | yes                         | yes                         | not really                |
| [filetype](google-dorking-advanced-operator-filetype%5C) | yes                               | no                       | yes                      | yes                         | no                          | yes                       |
| allintext                                               | not really                        | yes                      | yes                      | yes                         | yes                         | yes                       |
| [site](google-dorking-advanced-operator-site%5C)         | yes                               | yes                      | yes                      | yes                         | no                          | not really                |
| link                                                    | no                                | yes                      | yes                      | no                          | no                          | not really                |
| inanchor                                                | yes                               | yes                      | yes                      | yes                         | not really                  | yes                       |
| numrange                                                | yes                               | yes                      | yes                      | no                          | no                          | not really                |
| daterange                                               | yes                               | no                       | yes                      | not really                  | not really                  | not really                |
| author                                                  | yes                               | yes                      | no                       | no                          | yes                         | not really                |
| group                                                   | not really                        | yes                      | no                       | no                          | yes                         | not really                |
| insubject                                               | yes                               | yes                      | like intitle             | like intitle                | yes                         |                           |
| msgid                                                   | no                                | yes                      | not really               | not really                  | yes                         | not really                |

## References

- Ippsec. (2022, March 21). <span class="reference-title">Google Dorking: A guide for hackers & pentesters</span>. _Hack The Box_. [https://www.hackthebox.com/blog/What-Is-Google-Dorking](https://www.hackthebox.com/blog/What-Is-Google-Dorking)
- L, Johnny. (n.d.). <span class="reference-title">Google Hacking for Penetration Testers</span>. _Black hat_. [https://www.blackhat.com/presentations/bh-europe-05/BH_EU_05-Long.pdf](https://www.blackhat.com/presentations/bh-europe-05/BH_EU_05-Long.pdf)
- Jamie. (2023, January 28). <span class="reference-title">Dorking: A comprehensive guide to Google Hacking</span>. _DorkSearch_. [https://dorksearch.com/blog/comprehensive-guide-to-dorking/](https://dorksearch.com/blog/comprehensive-guide-to-dorking/)
- sundowndev. (n.d.). <span class="reference-title">Google dork cheatsheet</span>. _GitHub_. [https://gist.github.com/sundowndev/283efaddbcf896ab405488330d1bbc06](https://gist.github.com/sundowndev/283efaddbcf896ab405488330d1bbc06)
