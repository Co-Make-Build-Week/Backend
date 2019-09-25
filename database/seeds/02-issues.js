
exports.seed = function(knex) {
      return knex('issues').insert([
        {id: 1, user_id: 1, upvotes: 3, created_at: "2019-08-22 19:48:12", updated_at: "2019-09-23 21:50:12", category: "debris", title: "Debris on sidewalk", issueLocation: "7723 South Lane", details: "There are sticks and leaves all over the sidewalk here", imageURL: "https://lh3.googleusercontent.com/v7dqqGZvkZfoVU4I4Ac0WBjVmwfM77Cu2Va9VChn4smoQS5PpT_lkm6riqr-s49NSwZILWoWkcOJOxa-3mnq9HmhYxUA9eCBiZ-ZlaDrQXBLENcCp6RYokjenAee9DLDotkgKKHt8KsbNAJpQD0_OT5wrABjRDwurXQA8HlXsIy3je1jirSNy-R0hqSOhrQ5zZoYyKVHobzWrQKLp8vKMcpqAGLSGDswttOdHwRaEZ2ezlPZAO4-Sre78YilVL5IwieTNAa2VnIybxtCu6M7m_d4_CT3BwylogA_Hq3tCEm22RXwhxzSRRQzVqEwkKF2ErMqJZ0w-eb_kmESKMP6C7C5ffuDsRS3IF1jhSkBIDdKQu8k_wCCsk4aYQ6AINyIjEb-9ltaSCwQ5Lhl5-RY_g7TxthTquUpDJc6T40L5Fa0oBx9nAiBQ_90lZiRjJrrqpkbtMk3x23FeHzM55-mbwZsCh5TVjzmd_h0a-Oa4RPiY1ay20bIz_Jr6vU6ipQo9i46wsMVRq2JqNPabZlXGUMQ9pyeL41ALJIOdsJ9s5h0m738zc_wMjlh9mO_jtj-jv64pJAa1djmerpUtJ-PVidFkdizBfH_jJmE2MC9Y_nBnApMFygKch-qZcPZLy61qBxrVQAYSDRqNtkLn2RDUakMoAX8AS7EtjskbgrCJAHP7AsxRDouYq3DYDJjlNadgZwKHLn06GtmfHCL4XeKu99WtBccn0mLIccjMurRgGSY5hsV=w640-h480-no"},
        {id: 2, user_id: 2, upvotes: 10, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Pothole near drain", issueLocation: "90 Cherry Hill Ave.", details: "This is a major asphalt erosion problem. I ran my car over this last week and got a flat tire", imageURL: "https://lh3.googleusercontent.com/ZvKWtnvPaKLPhl9Ls2PTCceSkiO6wQO90gW2RW8gTPu3vEgpg03qFAvb0JOzYcYea0Z9-u-OOMY2malr20TuS8JCWgwGQBeJBP29h_mtOa7u0F53K9kZeJXhVhS6olk3LutvPlkkcQdASRzzKDZNu8HYbJFe9xFgveNHKWeDnOI0KpXNh9upvi2MrAUvV-jHr5NU8ZsabwJbBohe0-CDWGaxRlDFsu_dosy0FODFDu60PN0UpffsWBIhFWBJWMTj9OM_WmEYwNc0jwNNbKHd2-WuphJVgEYTcERj-tXS7a-kzC2iHm1bO0eSFMaYcI4deIVn5f2LLJnvqX21h65Q0y_78bcM9enrv_JQxMKLBYD5qlAjkCXXYcj3VsZzre_Pv2LM2HQ4Ue1MNFcaVnlfIbtScVXX_VearqVHTiYPWxysjO1khWVoYM0Hxhe0dAVANwJxYOkBfbyrZ6j5jwEMuWU7d9mRW_KRNJVyxCoP1XA9m4iYH7pKBw2-5USAWApb4Dsf6nQRS7tNSbihZrOKVnfwd_qNXxiweskXea_HXQQyWcE4WaPDToRlGTKsFT6HctzqkqWgUZPJC8P4RuMNIPHimriutJZw2bTwF3Rn71f1QPK7JMnG8XFGVXkhcBMjoGWcMrEzB3Yk2JqiDfrwzwIybkyMQF4vkwqjVRCDsvQNSL3ov4UU5INe7XEmWoe3R0Uw3td8OaoS9g496Z26lZP-ZQ6BZhfTu-l_NawGdHT7YUHt=w1280-h792-no"},
        {id: 3, user_id: 3, upvotes: 7, created_at: "2019-09-07 21:50:12", updated_at: "2019-09-23 21:50:12", category: "landscape", title: "Overgrown Grass", issueLocation: "Park on Myrtle Ave", details: "The grass at this playground is getting out of control! Please schedule it to be mowed ASAP", imageURL: "https://lh3.googleusercontent.com/S-YYjohV0fbSU4SlhS4k2cdg_UUgO2PGL3ZEoWlZH-uelqgK9dTE0rm0TUecorEJR7RU-PehIEmwdh6CTOI3ObrhbpAzlsNzwqo90sWYc1FvaezUopLh5_yJYX5xFYp4HMbGIPAou2vNtbWYIS_RH6krfnp51w4jp85bGxuy24pB0rnJGAuCicVkkjlDmJMdQvTVoj7ypevHMma5vG-4jkxTtGEfFh4vqJ9pgToGhv3WQFSJH_Y4MYluM5NMwYcw_oncWxqadkVTv1fZwGz6jgAWmqCt336iWyXun1oxN1EpiFjN3cnf9PFfPDKIEHdqVesNDlfzbUnbGjpLb-3s_lHM3pzWGKpH4MS9jsaddWLtT-xtmgYVe4aThuD5sI9WRHgPr5V1O0rexw0UslNEasrvrEARIyiPpzYmNDFVUN1mSB-W7Sxs7_mc1jMuqrSpccCyQf1Rs9H1UNWSckl2NH_UQbUn5x_1U-LZhfqs6jBUeuKKwcx2h12sJzv49lINB6KHArH4eB-gr0vi9Yx1KmidekZrzXrjuwjwg_-qRQfPRTMHXbTB3x5bgfe_0zgksxAHGTgo4WPSk0gIGct4uQC7cIa2fkFFo9ZXOXCkWNoXIzCecZwxuBFmCK6pkY1o8Y2fYIfXtMjIY0Hk9RvzJ_6H5Zo297TPkGxLJwU0IwlQ8dv6L8nzuKzmJXCe20brpGj5pPdczt4ZIAIFzwozKZdnCyAtgzbQxUEQxk_rZ5G71cE6=w1258-h943-no"},
        {id: 4, user_id: 4, upvotes: 6, created_at: "2019-09-15 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Broken curb", issueLocation: "2977 N 1412 E", details: "The curb is falling apart here and needs fixed again", imageURL: "https://lh3.googleusercontent.com/ePozp9RTZkE-UHeo8hhu6Oll1XT-5Z99gC0Ds20SEFOfFv9Oqgun-G5ua6mzWKZlc6cpMpSpVoC3IAyAhwqkSj2tnRjZnZDYiDWcmvJOhc9zB5hnmMB_uDDXy-0Fhq7SW1oYcVoiUn0nkAFpywgxwt-B1wmDFHzq0pIZb8lPAC7j6cCD05GsEm_EHp2NvuJ3zGn-zrmn2CCFEUD_06IB5LPTgPisJd9J-8_ivB8wR6FPpA-G9Z6QKJl7WTrjp_xFRBPV_WxOtsYvG109jPoV4pChDrK4hT6QluNhI3rKEkiQi0wHU1h4MvUiJN8kZJwg67KB9OpZ8ov7Jo8VW7SaRUSC5GXCN41UurWumA0C1x1K0pjgKNIksGsmkkrg37tKIV_gzGptWyJmQC0-4vHiz8tY7NdhKBipVBQsNV5WMiP6Gv3OgSof8K9uatGN7R3HcudH3jbv4qLKQLk4iy2PkyMxnHjV4KL2SpV7DAb2RR-jzXO5OeQ_XdFJd4kWCxA_cPEAbEcKjZHpozBhf4pjpUD7SGYaKmKIUKfKQUJKn8H3nu0WJt9VH_Aru6o8XTD8nSz3mVo_2UM8p22iWwR9NFVlZxY3-QSSi82he_NJ7f9xv8s1g1wmdzJvkG4MzAj1BIRl0F-fPn8sc5TXfCHQeGc0UxSc01LXTCv6w0UoKLGuW0fmep3L_EZ3fehNh-psj3b-4lTavwjBv7HUwfeOFYbRI0cm1scDqDeJ-9MR7D10rxpI=w800-h598-no"},
        {id: 5, user_id: 5, upvotes: 5, created_at: "2019-09-22 21:50:12", updated_at: "2019-09-22 21:50:12", category: "debris", title: "Leaves all over sidewalk", issueLocation: "9057 E. Overlook Dr.", details: "Someone please come by with a leaf blower. We can't find the sidewalk", imageURL: "https://lh3.googleusercontent.com/SiNDKfHYI7lLC7hSwmDIBSPFjrIeBIvMJrF75bBGjHao-JMQeGoU1ayPxUEZmbM1ADh7Eq41sYXJKYm1q3NlMxVXYxF3cA9zMqScJ2qpUMsVJqrPZFZG1dH-Ef0SvFkw44Rg9SU9GuUXlvcEA8x7UCACdtqh-C0_4wc_IkD6Sel6ZoCeqQGtrli5GRGHOZ5_W5mESyogFGtiATExew4MB0W2H7xrWdVrJJWMJbNzTsqS9A_2UDuoJFE2p1WuG0mKccqGKhDLxRXv2Q9iEUnAmne6iNe2mIzseF1MHekh5lSrmix_0BBQ_HFN4BV1VYJ-PdEuXRU0Tk040wI1Mpx5Nyh55o5wP8k4BENLLQRx5AUDUTOz1u1z_D8awDfD_15k3kbxV-b4HTlIUQxRfvUV6krH5Fx8uriAVpgEc-50ozldTrPVab6_BQei0KffnQYrsxqrxKtDZzqPt9cQK3SK-G1VHQ6qiOYuRpReY3jc6FvysFQWS9Gbe48R38kxRDeqyXYGUeVHLJUChbM316N6Ss0iFWb4GEK2JbQePTXT2UwaL3U7Q0my2KIQRUQmI0yUo1MQAWWxuZD9Yuu1IeqTkRq0cCGcDACY73YDHvkvAx1IGZEc-kc5zFHFad5yqcAdcUhpq8A9D3VDJZDBAhIUvoQjyx0UosntC3AtsILQv9ueVHE1Se8Atm6mYOqTqU46AiDylVLN07R86y5YiwWTFOsonluZNxeWSJ-YNX9HOJwP0EwK=w1024-h768-no"},
        {id: 6, user_id: 6, upvotes: 3, created_at: "2019-08-30 21:50:12", updated_at: "2019-08-30 21:50:12", category: "landscape", title: "Overgrown grass", issueLocation: "North side of 6th Street", details: "It just looks terrible", imageURL: "https://lh3.googleusercontent.com/S1M-rVauYEKyJqYP1mPxEZPqTDZ6zPUYV0TFrRlLY5oJEWarZtaGCxi3EliWUs_Tp0MdTQrXSWFqISHxucoGOZ5pa4_uv0NHEcF-OwSAHqywLyOd-J__h1Y_9I2XDXHrTB9enDKIA0ffTDS_7orppFRXnoX7M19KxZhTGOhUZNqYpe3YaWuZHYaMh8UaKoHAl9ZQVGWI9n6V1Cz9KZDNZt0WVMx91DYScp7X-b54qhE3qyND4RE747_Mbqxgc5qW5k6-BowGHwVq8agwy8OmXMmD8NlUCwllbt5ausmgnSs1ZMgETsotCTgv6-p9uZ-Ng8Yzn9AddYzKctIbuzThNW7XszuYW_k0cBw1euYVwUymR0JgnJDObJck0tuQDjM-bL0OU4Or47W9q1eZYwMP2j7ls-73C4MBCvy7JdGaZ9KYcqNQE5c06_2R4C25eSRZwetCs7LkksaBiPZgvtdIrTGKMvYgI9CUabiUUN0_JBF9J-_aEfQ8M1-8dFRp_IqattMobfL8dTlLtnhsou49NYEuKFqtMV-Hmo8GWBpAaWdfqD28GHmwgZhw3C6nCE6fSTiNiQI2_hxMzCkHWh18UGVWF91wptijzOvCmwUMgb-eGyMEPiO3RcVy8nZXJJU2LarSdTgKuaQ9o-kF9SFM4gFPwm_lO5W6ddah-ZRDef5-KJmGkpUK1tRZ3bWEXsX26KlWUD0bubg5B-Yp7LRhIyJd0YbM6awTSt2AwhXGDLX4LVrh=w800-h450-no"},
        {id: 7, user_id: 7, upvotes: 4, created_at: "2019-09-21 21:50:12", updated_at: "2019-09-23 21:50:12", category: "landscape", title: "Dry grass", issueLocation: "39 Acacia Lane", details: "Desperately needs water. Maybe the sprinklers are broke.", imageURL: "https://lh3.googleusercontent.com/5v24BwYkriIjyGMorJToRvABlusn_xgdViyB1r0ZF1eNReDi1nSLCcFxAhrVNLDh9XBUwkZQ5FXmCgrmWbyaiR8uDS0Z6vUm_u2KDgjZ_xQTA09khae3PqJmgeQ5a0DDxypyuE-SFmNzexpwJ7xNOlljsCzI_h0ArVHGesKlCxp7omFZulRu3StjudO0jF_Wc71GRCXmmNJIORnCbUOChP49T-Ukotz0e2BD3FvTiUyp1djT6XgwmSaTC7-bFyyu2wrREqkBD3qV6C9BOIBbI5CewHCeGKmBBMPQ8VBItMTpCjlaUXkCS0oOyIJs025IZG3FVqmNn2J4rBzUEqwAbQGoF4VWuoLjcfR5-5lB3VtLhXzige5YMfvEY18ddacIxrFRG4jOBVcZq7XFPz7TnhM9yE7oXxr3Vc4wMlMjHSH1KE0RKZMY-PGRUOuyWnyajACZopT7g76mAr-RtZGm9yGWaOoIHLAfJprv3uvrEKq9Nmpz31dRA0sEIldXypHb-251cidXpMLrDLNSthON6m4xWub2o-5sRJRefEbDE422ZuFDKklYajm7GxJAdJBD0rpNUhr0emwhzr7NA1HK_s7Y64tdxpTUic2fkZuz6OhKp19qgEqnFBGZvGBc-VvFgcxEDY5Q-eaJnB-U8m99YKRZS2wA07xLSJ2lr8aS6VqKoUDkIITJxfzU9q6DObgriwuHxiyEebxpIREtux-Xl5-fuGFWJlo5pYE01sZPUGnPQySS=w840-h568-no"},
        {id: 8, user_id: 8, upvotes: 8, created_at: "2019-09-22 21:50:12", updated_at: "2019-09-23 21:50:12", category: "sidewalks", title: "Giant puddle", issueLocation: "9687 6th Street", details: "My kids walk through this every day on the way to school. It's such a muddy mess", imageURL: "https://lh3.googleusercontent.com/ypydNKPj5eRJiq03heCZFg8hXpCTE1QbzeZOhY8LfDL2YQOd7E1dt1ity2QQbm6z6VkTdYEcm1McFhLarSlu7USMPtKsqicnJd-F9zjvoKAwS_XCQ7rVZ0YaPU7UwunJW3ehVncpZ4yxzl7WwsFj1o9W3zF53ZySoa_PGK-L9ZadgJn0PKFUANO6RCSF987Yemjh7LFyihqfgWHR5v9C9XC60YgZd2Vy1e4G5uBpjjMrCj7IcwWj3-S_tf5pwfxMSBvbTPQVNF8zNyXCSRFGphAbkh56jnlxj9-uYe3h94SjhPZ2s2bmL0N6gnY4XLF8qkk70coTIX-vJ-8ZVQPyN1R4eyxGJDmTA-a-oCzMA9ggdqgtqndJubROD7q-BOld9LtM-BZvSgiUm415vs5X6L4G4p1DNNRXMjFFR9xgpgRwrInEIA_9yApQrDo80JaPb1qx0BUFDpICnHApqVsXBzGsdpXvi6Ppjm8NuqpI4y6oweX2H4XTUrQ51eVVP6okF4WZu8GM2wSCA25YOWA7qpAJuLw31kqv25l1bXtUYhw9yHhjEt7C-bnbobQv7F9gnxLE__WHPyjqMfrnEujkGV5wQtossmFHg4eRCZdKZyUwLVJa_w-6QVcKWALaAfNzkptOcBBKrY1k2MKix_gH6rjfLIsW77hdPATv1NTF0nmKxBi0oNYGHsnbtBt0wFTdehERTlfjICscnf6WnUYTnK4QfOwIsZ7jZHd-vzjFpfwydy_E=w450-h600-no"},
        {id: 9, user_id: 9, upvotes: 11, created_at: "2019-09-12 21:50:12", updated_at: "2019-09-23 21:50:12", category: "sidewalks", title: "Broken up sidewalk", issueLocation: "Pioneer Park, near playground", details: "My daughter fell and skinned both knees here, riding her bike.", imageURL: "https://lh3.googleusercontent.com/4hi3uqGnUnxGMKTpad89haL8fkrDWoF4BTRE4n1kTdbB7DjJR4eCyYopnh_bmCmUmKRel5o7-RjwZGreMfhHIvInPR5apMxNv8zwQ5EwRSf-QE4ZtLe-r5DdP2cYhB9Svn600avqeQmEz3wWyOfxD1tv-Izu5lDVVNF5QuJx_VUT2PAFsgBtBcJnam-R8CIFTB2tuCxkUlRGa1x_EbTq78bzKqjbmMLplHO4zczMHRMXqdKyCsTjn8NotbGCRFAsTke0X187v4e6h4ntSvZKvpnNZT_N0AInK_5-2T4UFqcOJhWKfAJUkOwdQrhl7Omvfwu9qyT61r_VC6EB8U1YbqhLuL8B7lX4s8OZv-eWs2Bacg7aJBw-bcw1POOFWCKFXmGU-s33Dmmypp79I_uGqqSK8pLLd2j-rdbGnZDFez8TVoi4Lg0tSZLpDPzeM930Sxr4hyV4IzQwkdY9QjG6rJ1hj1-VvN7kTjtzaTJ1D0rMm29Cy8Ww70KlhM-I6IpoBjKnj6pYAhZAMjoK8vfPJhOcVemgropKUyQNTGsdH9fre0bRwa64zk1Ag-RmvwVp92RG7g7lCOoiBgNZs4YQcIzg0MU17_doyNAFyNjVIrhNKA_V8XS9Uia4pSuANcIUwwBd8xC0pxTDiyQt6Gz6Q7CZb3e9o_XnBwqeCCSIXEN5deUJX4gSdEvhRnN8Nwn1Hw5YVdgw1XTS-c6u0HKtZupRH9H3vOj49zcEnqizCsGb6D_D=w1258-h943-no"},
        {id: 10, user_id: 1, upvotes: 4, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "debris", title: "Junk on sidewalk", issueLocation: "972 Lees Creek Street", details: "Idk who left trash all over, but there's also lots of dead leaves and dirt. Please clean this up.", imageURL: "https://lh3.googleusercontent.com/GrbQWyVmUyVKY_2k40Vh4KddOwssfgDEyBjaWglAUBm4bzMq7PjM3_Xjfc7YfEL4RPb9ava-pDkDXlVyAGrIznIO-E5t1TM4doXjkfpwl__jxybqz5V063SBfPguAMhuKW3i7MfCMq6z4I1FcY1XE6z-ZuGrTQeN4Z0UsVecE0vBKCwQFtmFC06iRX2d7Yi_809NjF2quaONDtUQHaWd5Tms8ISdJj1EPbJMhwhcsxh-DlsKeqR4ola_qf_pVAj4aHHW4N2HS4HhYaq3F6Rl1NnGJ66MybmmRkCbFoqmzuYUeBSYRmq2vvVKdgHd2NV02xuwS99YRuWE-OSq0BUvhsUETKYorpLUi7REeBOtNNt0epwh2crJjf8abKRYKu8fzdEhX8QJDvuCzbpfBxE1qa7CAgX35Mf9WgOJWq8_N8ahpXC4CKIR-ISFJNG3TFGI4hiqcHScXHjpUAGPKsdwKwKBk6FsNUcEebXfakutZkCka59-ucuqIwi0GMf7_IRS_1EwRaLAkbS67W74hN7wn07FutMRwblrQGdI0G6aHQhpRiPuGODmCRsg7Cu8JakF2I8Lo17_mmOn91OAR0UQdKyRyeYLAFel23a_pKO5Vro1Y_f4SD_7kYo1ME8AmhDBwqy0uMnl4RTHiujHOkZkNFp88jafPBglCfSzlB5cnsMmg0YlGEcao03vopK3YCjMjLwbNQVCv9LMMmbqVFNjw3QU59_WElmbuXKE4A7okVdDE1y5=w1257-h943-no"},
        {id: 11, user_id: 2, upvotes: 3, created_at: "2019-09-08 21:50:12", updated_at: "2019-09-23 21:50:12", category: "other", title: "Parking violations!", issueLocation: "64 Garden Dr.", details: "People having been parking here for way longer than 15 minutes. We really need better enforcement.", imageURL: "https://lh3.googleusercontent.com/x7IhtsiYl2PLY7xodGscN-ccvP43VpzOk2VQ8UZmxL6kYk1s5aVMnxkLSRuPoU5rx_b_NIET4MaYgS1uGfXduyT_fMaOcHH2bXwQp5PAvmr-FwZlscVyMR1kzzLkVBOmNABT9ienp8WjVYM6MwB56-AtTHudJ0fZtRPlblcWkoNJsGjjGEO1TvdxgfEyc51-qbVzRvCL88lXkRjho1VbOF7cuXDKtS7c0MpTp-vhYAcCWCUgH9m8kPaP39mX6-gGTXfhhSW4_C0cjodssVP8WRSwgmvXKht4nLWkm8d9H_IHU_yhLc1pEfbAJHvGuo6AfWyRS4ozk0-q9tANxDP6NNEmP_2hwrs233qz02zgaKydzkqb1PeFNl6gwsev3Bjaod6fSSGdS3Isn98J6aw32qhISNVcXsyt15t1kOMlwp4mv8cJce5SCQazEQ1bgf4_ukH2_XrFXQWRMdc7PGZzRO4IqioLG7FFBNYqX0fRy_ItC_mqMgaCevFIvosca3nSk_rNXdDbdeeN5N5gaBj5mu3I3AeeW8PoxIKcMDMycve_iY5At23wHPAr5WVULiLrZ7QlF8NMlGWWbZLi1QAmfB-8s3Qtinj7g1iX5rQtd_e7Zsph8OClIHW5xWjczHMmnPAJWDA2k6QuvBQEVTjaqhGAKx2gNm6AQfBA_E50HwyzvA0MqRDP2lwJENA_pZK0GHBzIAfns11NyM4AoH2qMxMxLu0A6YapjvGPSOuIZ0Oa6WoK=w991-h557-no"},
        {id: 12, user_id: 3, upvotes: 7, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Crumbling curb", issueLocation: "81 Jackson Street", details: "This curb has been falling apart for awhile. People are throwing trash in it now.", imageURL: "https://lh3.googleusercontent.com/Sl0unCL6TnbtsnuA1JSwV2MX1f4-0TRkD0p1XY4Hkx4kW5psnBzS5lPn4Uiiql3Uz0dn2TkPbTy7B5Uvyf1ZkAHFoxPMvuXXKMKOehz1RVi6sbqPKMuTTH9CK2_KfjhP6ni53_LqmMVJVd7zhp_c_J60IAVFeR1KuOoVqFrKZ0Kkd04sd26vX-b0cP76H_4cVHPe4HU6AfkF0Lx9L7ClB3dAB6h51AEpXshclpyjzkybXv6jzkc8RP1dlUFcABz6CsjmIqe2qcG_b4YmPLWtXsWvlH7d1y0LJwl0zQx0-pXaJ_qXAUKoLwS4FP6nSymAY0FgZ0kpxK2fIbd4-xInAyyrusw0YRwIMTxIjaAoVsd2_HHVgDPgAVjRvRl4qZdwMiOdEBlPT9_Cw90hmbwkvolywswnIOEbhUTZqPbO97nwlnQBG_oMdMPDCt2hGaeDdWg-pY4ki7q4AhDirI-Yk_JZhOD_nJ4vRkjdnK8RvUx66zMECDT0F9BUonvPjBZ39YxvSe0SO585cDP-wXMvpTW9dAUYp2egruZygDkUJrgX0hhAnfRXrnS8qZI24lpDtA65djiPWowXxoEBiKKrNJEcE1dFOsGtalDI6-664APfO90yIqjT5vosglmdt6dpwqxEl0mJ93vYD34xNS7gUixFCPo-oGTgGuwEraTNzVDasKWGisvpT7ZDBG-R_pkqxXUhqnSH1L1KdytBtmsR5bTKreEi75yTV6nk3eSZP0T2JpeY=s500-no"},
        {id: 13, user_id: 4, upvotes: 5, created_at: "2019-09-19 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Pothole", issueLocation: "8207 High Ridge Circle", details: "I asked Domino's to come fix it but they said they're not doing that in our state yet.", imageURL: "https://lh3.googleusercontent.com/wlItE8BFg1ar0ItP08loBm5J7jEKpOZ4R1mmJ2QnN-QfCkPYtliACFDij5xBleY8fziP3FTgi7rzs50R_XTr4OU5S0D3U_q0kayEaMWfNHl1JfpTJV9mgQvmYlv6bx-ixFUVroI2_GPaJxhADX4EQ4LX57hL9O4Yo2FGyM0F7esn_52a3aigGTrxUNaH688WDYreUzMXmaSNDN4Y31oMw4dg3cP-1BIY1yXA6oHmDHK8ZQcSTEwPYiSL9KxU-JJcX5KmZjyEO9lha7Zu5j5wTQ4BVxmRubFp0RBR3RKKX183H8q2LkiLXjZxT1cXUih2WRl6gX85JZuMKxSA7XTwN5dx7I58SvE_JDQB9OCYC-26j_JRqsaHKRJn9vZI4SAuKEaG20VRat8eZmvbiF4NSeyFBA2jNhokgRlH02pdrh0KK9G3sfFRj38Ii_qkkbmXr5a0CKoJ7GNhcxb9dJk8tXrrrd3QjJnwns2mRs4qksaOpwFj_d9lswIJqCn3jnK84WuWod1cAnBW9i6tIgwyeXUc6408LfRiL3FMBZiWqvcwSiy-a-GHN8i9nZG3RaZlgnFCCrzZAMl5GHocPFC0XmoFrXHLl8DWwOXdShnlYIGv1-dwM9vbpZmKdqr7MQbSzxmcLNOeikuJ2iVMs-ttgGHDG8IQAcyK46zlziEk4VHOAp2fdZWWlJGHs4fYMzOXjM6kG6TiJSR0c8HNv-cjk2zCNvE7eriSFwMQlVn2TurRwdaI=w1200-h800-no"},
        {id: 14, user_id: 5, upvotes: 7, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Pavement at corner", issueLocation: "Corner of Sandhill Dr and Parkview Ct", details: "The road is all broken up here. There's no curb at all.", imageURL: "https://lh3.googleusercontent.com/PQ8saOAVQhrzlO27tUEqgN7cUFg81aqHhyWxeGsV-NtYeW_xCHBI5SWlV7SF7jmnlrvugDw8lkp9_nHFdcdVz0plIRMWWafNRngEGwdZpyzd_19Bxe8EyRpFuwGYVgsP4mOcu5eJjEBCV9ZG6WoNRzuayYgyhyR8oDRbcKlHWWeVu0ipDnbBbMmTW0B_kRy96mR11g2j1bbVQLSbObxCF6gi9pjXJEzwgLf810DlUoVKfaOMD8U3UYFipHPVVEMTgz92pnMEHrHffUhMZPOG3EnKpCyhTCw0uBE0X3z1-hfyh4XluwRc5qWUiNSxNH2tRlfkT7Gx29qHrgwDo8VkP8H5IVdi9Erl2gGporb2sueyOatP5q67VGhnpByx8E-yPZSo1YrDMZzuBOQHz8gd6fe5mT3eLKmyVKRTp2wLam1IlAphAD8EPe5Jp19gUWcf0UK8dsyy8Vo3-E96m4Hvusa_ebEY9TP0fwxHpWjJZ4LI2iFtTkp6lIFfmUPa8RNluMJxbMBlMnUnNhq0oBEid50-UMlnQBCTfhPUmxHQ-3-JVHimezgIJFKVgv-xD4T2U7CQxmt1umG-nJ7fywq-0Pv9lYj-iDGKgz4sxt72M3dPNqg94qsSR8WIiju0yK8Z2wylG-vnc51CQ_G4S_nhXWFe2wX_t5UATlL6tC_8oFZTZpzO_amzXAyTDyS08RIuJSdkjo-AAOq0eR0mh80YdT3r_E0A6XHvnxO_qaMCRITobO32=w800-h600-no"},
        {id: 15, user_id: 6, upvotes: 10, created_at: "2019-09-03 21:50:12", updated_at: "2019-09-23 21:50:12", category: "landscape", title: "Needs pruning", issueLocation: "Near 75 W. Grandrose Dr.", details: "People walk in the road because the shrubs and trees are so overgrown here", imageURL: "https://lh3.googleusercontent.com/BWWVOZw_eHIJP5WY_HdfCjFNrApAsrSuE4rzvPKYJrkO_xFDm340LamU_HhsNTJed18e8ka0zS2TzbZq5Unpkb0eGMa1SsYsP4ThSmubT8qwi4MSRCQi-vl1HVQKaxZBvBEwZLyxlxqNXtCWCYsgxssHAELZihoNhr5DvMjInavxBVmk4_dGZYJJ6bX5OmSidrw16PdrrHk6BEGuJ5hhJHUtq_a7D2lzAVJN55_t9M-LKAatpUNWZXBjVeChfsaYMCpPRXsjxyjQ2kQ75xpmeTqFsraTLn0FMvxWFjgGKLpruyHMaJJO1TFuJcg1xp2EY9CNnf9Vk64-1jvF-zBpPM-4SGW7rJ6m8UvhTutJIiS8MfmkoTE1peM_gs7Yl_ItzhmzfvKkD2ALH0ng0Wjd5W40xPerFLCUAetNMEDd0jn-kyCi0J6EiqrJggOLsPD5NWwoAQJrdCJ7k2On1QxGN3Zb53gHJ_HJgOYL84dcnAOLenxS48OuHrcK3Dcwl4Eeb3KrGjOvoF0oLlXnZ5gLA0Kbh_jkT8xdTlYc9NNKBVHXyFqGfmc7H1SrTa_tkgEnrlgKazMOZEky-3YQ7XH5rFQxvxt7YEfYbMevq1hZ-jnpt9xq1KnT3W8imB1gE3LzdJr-3ARNxjlzmtC5Wm7k_U9rZe9zS2-o9Kg9SYtrIUj0CMTpilVaOFjO0MiL3DROjrTg0hp4-Wd-PGHydTPinQYTzGSnIr5-24rTwQXhihgmpcT2=w1199-h672-no"},
        {id: 16, user_id: 7, upvotes: 3, created_at: "2019-09-20 21:50:12", updated_at: "2019-09-23 21:50:12", category: "debris", title: "Trash", issueLocation: "8277 Newbridge Ave.", details: "Needs cleaned up", imageURL: "https://lh3.googleusercontent.com/t9wyonbwIf1K-c_Za1Yy_3uwFPpbroty6fRYlxw975sS1N3PrVg979NP9qTZHxLzUey6DOTMzghq4xxLbRmYjgo9OT8TAVeNFxa8a52quCi1QsXbgYWQDqofRtHevpyyYRvgWuCZL4VHFrwzdFk0EDT7Wa8APzvSfNbjguZlcomKGymvz_ogniQjVzETRhZwOldmAAOpw4hFAVp6Oz9oNN3jrw2JDxFfiuXtELIwTFhl5fYRyYkvfCcy6mG1fihJCISk1s6c4nAbQeAx3oNToTfLWYoHOitP_3nfiIPkqWUGzKv5lcZenm7b4Qx-nqjil9_TVySBV2qXkwXp25Vdg4Xq2CvKY9MZcgpYKVWOKIMdxJAeqf65UVyz9DfgNCQI8gxWHEP7bnOu1PK4xQJ5QbPgYIpiXMcbyBpZ_B9bqoAk8KVlSfL5pyK4rwCuIE0Rjpu2j0xHKZ3zEDD6o9GnQslyGyM1YS3l-6N-E6i1LndlCS43KnUX6WIStPRVNZU37frOAXoMBoIKIx2epYgrwvkeUtIPgAY-LBgPfhf5gw9vWphWNYny-81FSfev5RT4HgsINGUXexbDr5zM_yWQjGLmID0kKPIp6oKHWKzgO-eLTYvd2iRPxuSwchJExflEH4nKNFYMBGesJVsRdGlYE6maYpxAfEkn2otIkdNfpVcR2zON17eTPMaOZJ4vamWh75AVqTTiuK5WYS7WUamu3_X820UrviBto6cHiTdBUzPvqUNX=w800-h600-no"},
        {id: 17, user_id: 8, upvotes: 12, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Pothole Crevasse", issueLocation: "77 6th Lane", details: "It just keeps getting bigger.", imageURL: "https://lh3.googleusercontent.com/vzhXt3mbeqOnC9zzI5n42jsaTvaX8ccuA3gtZ_DLFDqP3awod9sas3gm75O9NvQf60yWYUXPpmoPCC_libgD7BE4YOQNs6_MPmHNF_PrXAh-KA7G3yrLG-PDPSq89WfTT8qZD38uI7tQMHrSxogdL_aTh1_adLA0hb7mT4GgsSYlZHxT6BJqyiBijybHDJ9htPihs8A7k9khVXqxX6SwCQiojtsWTXSV7--gn1Jm-JRePKn7-yROPlY1KkETSqc0nni1ciy7Y4LfHf0aDQgMh_RNtunseZAoKpzW-htK4SERYJeXi2MA37eZ9AhHje7FCE-dN5jIL-xMLwVtBG-ORqcYlJtH7uhXlkinGBMobL-K3BR6tFCMgTCGRVSgMISIBMIMn9DTmZSGOIUHiL58k2KvDsxMOLqsrWk2CB1yJo-Nh455I4KPuDZCq2Gr4SxDmAfDscO858Du-gWOMcKV13Z8O-g2LuvgCilSsPomlsUcF-lMo6-lILvkrqZVe4Lnr9ic8JsQyDVGp7fXkjaoCnPo8_iFNxOsvt2RvB6mwdKbRJOC1Hi_zoQYXlU50uune6GPFNRYRfZ9SPRSztFbC7oTsdDDvOehU9k9olDW3ZcmaMZb72yAv3cJJok65j2GkVsns5vYuUNQpXovjxPQf5dNWhjYz_afyKJQDeuDLg4FGNONNEIe87knx0vPdNDy_EviTgXM2qWhsDH8aUCpugA2BOR_1pl063QHxwsyI92nZSJ7=w1415-h943-no"},
        {id: 18, user_id: 9, upvotes: 8, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Pothole", issueLocation: "7050 Highland St.", details: "Please fix before it gets worse", imageURL: "https://lh3.googleusercontent.com/tDfO7trHr5Dxl5MQDPMc03NxVZ93PsLZBLzuBnotCMrcByLm3akFyhD3rKd9-cudVuHLJtGDaNe5jsVY7ENGyfn_jerQPJaC28KmEorxHjK1m63QytJ0yC0_nys2m0X26VmAAngDs38YhMGmQfW5ICM2rPkkVqngigRvv1zDcQkd_Z-IY0rlj6TmvVqRUp5sCdhVAU17D3t0jHhIlMgMuYKUNGvF3gEbKm16v-VZAIQgThvq0Cz19QF6Lwg5TyA0S1JT-8wi2dKYsDSUnudmQMz8Sv-h6aJxEIb534h3DLf5xu-orbWTOZnDB6EE__IudpPL9d6msiWmu-Ga_KvmWlD4nErhTwKDe9gbYgXfp0WckRCGtLCTUd1P53thKWCuSMbufbOYX2tXzWwtDta5ecEWWhC9UaRUDkR9rjCj-_1pkO9HbLSl5DVfM5WpZQv4PcQbuU0cjs0hJ1aVMgiiwy7elXRnO52KoCib2iF_yeldifRGZwVG5_cSMW74_Ye3_Msfvi7vY3nT8olyjifX44WJstzXu1XC6MqG2WZtSmC1vp4EAPzEhP77L_qQ-xOwaylMlu8tKaah5kGqzoGxlpAGudvZPKRDE6uZh2a0qhBxll1mwu5tK3utbmRDCtcZh1YEyHqmviLwMneXLdVrnXTLZ8R1qhUq0x7m9Cj7YoXN7YYdaxB1-_B0xnIgIh4zAj-hb9mzbHu1zR9ilgnhSmBsmBv39_VeqIuevmHa70adeHIJ=w590-h350-no"},
        {id: 19, user_id: 1, upvotes: 7, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Cracked sidewalk", issueLocation: "2977 N 1412 E", details: "Pretty annoying to run over this in the dark", imageURL: "https://lh3.googleusercontent.com/D4queBTjlygF4lmWOW6f4mChNm1u-nNCWVP2KMK-djorzozAnLBOXGQl6EZHdqfT1ug6_pqrTwfxCQ3evk-W2G0ygqxq68-KEXKJBm5k7qgy-7PtXzQl3AwbRXnWgmOk6Awp1YnN0Jb_Gm8DGPoSdaTH4Ke86pFPWNIaZrI2GnbnPtUxfTcA1p8JGst4oM6TF18J6X8AOY-yG3aU8pm_sCPOppDWD8XYzslLZq31u3dylM6uX3ElDwl3q6-TL1OmTJbXVzoDRFJ-HIxNF2xerD3LvPd3SrnVLEVQr_bOHeIpDmRuVSStjdjwz59txa0_TQ0O9NVOHMnZv-or2xYtcXuY91hAbDRYz3gx6bBUH9EbEytR4lKaCoMMYu2N6zu38qBeJSsULxrMw3CKj80wllpfnQ873mshleorkHMIRUtD-Qm6zMNgy5J0Zuod1sfD4Xd3aVG1OXorMa8EBFSAvGXGoeXMBa1yHQ4S7tFt4XDkWyz2G4fmbYqb6nJ4Zj_aLNsl50z_4LQIs6b1tUpatfrctTRgU7AA3gh1oCU4ZDQwUTYhWz6tN3T1D3rqAw_DHXvsK0gyL2UObnK3d6GrlznPDmh5YMdWE_dIYHlNTo16eo7ap5_INq-5_W8LJAKIah_6Oh-gmZxs7Dzph_o5vuy3ck62SB7WdDxbbg56Qw1DrD0pCleFfNggyJ2J0RiW4KoM6ASO4kjkwewXcYtz8BE0WyfW62opmFtVBs8cuApVcHQg=w1415-h943-no"},
        {id: 20, user_id: 2, upvotes: 7, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Pothole at intersection", issueLocation: "College Ave. and Shore Street", details: "The gravel is scattering all over as well", imageURL: "https://lh3.googleusercontent.com/FlVoU6zO59ErvFll1X4WglHTI1qEoiQ4ku0bB8tsr9UWfmm63aofbkmiJ5Rf7zDwMs2nyOceIMrUbsQS-kZiYgeZ2l1Lqor_1gnpLVobEchdQmIS7tp3hfRVjYi6qm4SIAlJWmDF8D_DxYoWnNWByGCpYfXNwgT4t1KOxcrYJFzFy2bo8UZTGoaMzzeQmtDySCHxq26SAoB82LhDqup76Ec-hodT01FmYhlAwo0cHn9cCzgy3rih3A-kcnzoJSV0_w0W2mf2XvkUd496kJzWOfIjiCleLGvcE4cp7DKpiPmHNuJVB7jaU-H9wAM6GViUWzbEXp6QGTNYpVd6xscCm9kPvhrteh_iS80v3B16K9ARqJ0QepHQTFn_bbl-JmLyEXRInkqWMPqxcOInN2tHFf-9W_Ptw9V8ROmNcbHcdaAr0B4D-1OZenyliW-wItUslyGkSoFLRR1L32mElagdfmm1AWjySHJm_CHwxfkpkR9XKUBm4lZc0CEE10yIULNTnTyVcJazyfnDDF2iJASY93_tJMTap-RETFTCYsKs9Zbe6pTngYYQYnqUVK0M0ha__gi3mK6CkKk1rYDDyGY2DL73DabFgx_04oGYDxK4urMU4j5M0csna19Kxc-CfM65cXd6p9oZfqq0nfulRhD_goQlMVaqXIo_W91c1eDW5xKZGoDwY34zVSrycTbE9DSev36yNYRvAvTGYryy735nRhy0a9fJ_gCMjsslWCGNxF2y0Cqq=w1440-h897-no"},
        {id: 21, user_id: 3, upvotes: 7, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Cracked sidewalk", issueLocation: "2977 N 1412 E", details: "Sidewalk is breaking up on the corner", imageURL: ""},
        {id: 22, user_id: 4, upvotes: 7, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Cracked sidewalk", issueLocation: "2977 N 1412 E", details: "Sidewalk is breaking up on the corner", imageURL: ""},
        {id: 23, user_id: 5, upvotes: 7, created_at: "2019-09-23 21:50:12", updated_at: "2019-09-23 21:50:12", category: "roads", title: "Cracked sidewalk", issueLocation: "2977 N 1412 E", details: "Sidewalk is breaking up on the corner", imageURL: ""},

      ]);
};
