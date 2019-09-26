# Comake API Guide

On https://comake.herokuapp.com

## POST  /api/auth/register

Username and password required in body:

    {
    	username: "test@lambda.com",
    	password: "1234"
    }

## POST  /api/auth/login

Username and password required:

    {
    	username: "test@lambda.com",
    	password: "1234"
    }

Returns message, userId, and a JWT. Store this in the frontend client for use on authorization header. The token is set to expire in 5 days.

    {
      "message": "Welcome to being logged in, eleasah@lambda.com!",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVsZWFzYWhAbGFtYmRhLmNvbSIsInVzZXJpZCI6NSwiaWF0IjoxNTY5NDQzMTcwLCJleHAiOjE1Njk4NzUxNzB9.6VAzsrELTJ1wFrEUGCPKkdTOOKpeN3_aa-cTYocj5Rs",
      "userId": 5
    }

## GET    /api/auth/users

Test endpoint, to be removed. Returns list of users, no authorization header required. 

## GET    /api/auth/users/:id

Returns information on a user, given their id. Requires authorization header with valid token.

    {
      "id": 2,
      "username": "bryan@lambda.com",
      "password": "$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK"
    }

## GET    /api/auth/users/:id/issues

Returns a list of issues created by user with userid :id. Sorted by issue id. Requires authorization header.

Note: if you want a list of a user's issues sorted by another field or limited to a category, use **/api/issues** with query strings (see below).

    // https://comake.herokuapp.com/api/auth/users/5/issues
    [
      {
        "id": 5,
        "upvotes": 5,
        "created_at": "2019-09-22T21:50:12.000Z",
        "updated_at": "2019-09-22T21:50:12.000Z",
        "title": "Leaves all over sidewalk",
        "issueLocation": "9057 E. Overlook Dr.",
        "details": "Someone please come by with a leaf blower. We can't find the sidewalk",
        "imageURL": "https://lh3.googleusercontent.com/SiNDKfHYI7lLC7hSwmDIBSPFjrIeBIvMJrF75bBGjHao-JMQeGoU1ayPxUEZmbM1ADh7Eq41sYXJKYm1q3NlMxVXYxF3cA9zMqScJ2qpUMsVJqrPZFZG1dH-Ef0SvFkw44Rg9SU9GuUXlvcEA8x7UCACdtqh-C0_4wc_IkD6Sel6ZoCeqQGtrli5GRGHOZ5_W5mESyogFGtiATExew4MB0W2H7xrWdVrJJWMJbNzTsqS9A_2UDuoJFE2p1WuG0mKccqGKhDLxRXv2Q9iEUnAmne6iNe2mIzseF1MHekh5lSrmix_0BBQ_HFN4BV1VYJ-PdEuXRU0Tk040wI1Mpx5Nyh55o5wP8k4BENLLQRx5AUDUTOz1u1z_D8awDfD_15k3kbxV-b4HTlIUQxRfvUV6krH5Fx8uriAVpgEc-50ozldTrPVab6_BQei0KffnQYrsxqrxKtDZzqPt9cQK3SK-G1VHQ6qiOYuRpReY3jc6FvysFQWS9Gbe48R38kxRDeqyXYGUeVHLJUChbM316N6Ss0iFWb4GEK2JbQePTXT2UwaL3U7Q0my2KIQRUQmI0yUo1MQAWWxuZD9Yuu1IeqTkRq0cCGcDACY73YDHvkvAx1IGZEc-kc5zFHFad5yqcAdcUhpq8A9D3VDJZDBAhIUvoQjyx0UosntC3AtsILQv9ueVHE1Se8Atm6mYOqTqU46AiDylVLN07R86y5YiwWTFOsonluZNxeWSJ-YNX9HOJwP0EwK=w1024-h768-no",
        "user_id": 5,
        "category": "debris"
      },
      {
        "id": 14,
        "upvotes": 7,
        "created_at": "2019-09-23T21:50:12.000Z",
        "updated_at": "2019-09-23T21:50:12.000Z",
        "title": "Pavement at corner",
        "issueLocation": "Corner of Sandhill Dr and Parkview Ct",
        "details": "The road is all broken up here. There's no curb at all.",
        "imageURL": "https://lh3.googleusercontent.com/PQ8saOAVQhrzlO27tUEqgN7cUFg81aqHhyWxeGsV-NtYeW_xCHBI5SWlV7SF7jmnlrvugDw8lkp9_nHFdcdVz0plIRMWWafNRngEGwdZpyzd_19Bxe8EyRpFuwGYVgsP4mOcu5eJjEBCV9ZG6WoNRzuayYgyhyR8oDRbcKlHWWeVu0ipDnbBbMmTW0B_kRy96mR11g2j1bbVQLSbObxCF6gi9pjXJEzwgLf810DlUoVKfaOMD8U3UYFipHPVVEMTgz92pnMEHrHffUhMZPOG3EnKpCyhTCw0uBE0X3z1-hfyh4XluwRc5qWUiNSxNH2tRlfkT7Gx29qHrgwDo8VkP8H5IVdi9Erl2gGporb2sueyOatP5q67VGhnpByx8E-yPZSo1YrDMZzuBOQHz8gd6fe5mT3eLKmyVKRTp2wLam1IlAphAD8EPe5Jp19gUWcf0UK8dsyy8Vo3-E96m4Hvusa_ebEY9TP0fwxHpWjJZ4LI2iFtTkp6lIFfmUPa8RNluMJxbMBlMnUnNhq0oBEid50-UMlnQBCTfhPUmxHQ-3-JVHimezgIJFKVgv-xD4T2U7CQxmt1umG-nJ7fywq-0Pv9lYj-iDGKgz4sxt72M3dPNqg94qsSR8WIiju0yK8Z2wylG-vnc51CQ_G4S_nhXWFe2wX_t5UATlL6tC_8oFZTZpzO_amzXAyTDyS08RIuJSdkjo-AAOq0eR0mh80YdT3r_E0A6XHvnxO_qaMCRITobO32=w800-h600-no",
        "user_id": 5,
        "category": "roads"
      },
      {
        "id": 21,
        "upvotes": 1,
        "created_at": "2019-09-25T20:48:12.771Z",
        "updated_at": "2019-09-25T20:48:12.771Z",
        "title": "Overgrown tree",
        "issueLocation": "1410 N 2970 W",
        "details": "Tree needs pruning",
        "imageURL": null,
        "user_id": 5,
        "category": "landscape"
      }
    ]

## GET    /api/issues

Returns a list of all issues, sorted by upvotes.

    // https://comake.herokuapp.com/api/issues
    [
      {
        "id": 17,
        "upvotes": 12,
        "created_at": "2019-09-23T21:50:12.000Z",
        "updated_at": "2019-09-23T21:50:12.000Z",
        "title": "Pothole Crevasse",
        "issueLocation": "77 6th Lane",
        "details": "It just keeps getting bigger.",
        "imageURL": "https://lh3.googleusercontent.com/vzhXt3mbeqOnC9zzI5n42jsaTvaX8ccuA3gtZ_DLFDqP3awod9sas3gm75O9NvQf60yWYUXPpmoPCC_libgD7BE4YOQNs6_MPmHNF_PrXAh-KA7G3yrLG-PDPSq89WfTT8qZD38uI7tQMHrSxogdL_aTh1_adLA0hb7mT4GgsSYlZHxT6BJqyiBijybHDJ9htPihs8A7k9khVXqxX6SwCQiojtsWTXSV7--gn1Jm-JRePKn7-yROPlY1KkETSqc0nni1ciy7Y4LfHf0aDQgMh_RNtunseZAoKpzW-htK4SERYJeXi2MA37eZ9AhHje7FCE-dN5jIL-xMLwVtBG-ORqcYlJtH7uhXlkinGBMobL-K3BR6tFCMgTCGRVSgMISIBMIMn9DTmZSGOIUHiL58k2KvDsxMOLqsrWk2CB1yJo-Nh455I4KPuDZCq2Gr4SxDmAfDscO858Du-gWOMcKV13Z8O-g2LuvgCilSsPomlsUcF-lMo6-lILvkrqZVe4Lnr9ic8JsQyDVGp7fXkjaoCnPo8_iFNxOsvt2RvB6mwdKbRJOC1Hi_zoQYXlU50uune6GPFNRYRfZ9SPRSztFbC7oTsdDDvOehU9k9olDW3ZcmaMZb72yAv3cJJok65j2GkVsns5vYuUNQpXovjxPQf5dNWhjYz_afyKJQDeuDLg4FGNONNEIe87knx0vPdNDy_EviTgXM2qWhsDH8aUCpugA2BOR_1pl063QHxwsyI92nZSJ7=w1415-h943-no",
        "user_id": 8,
        "category": "roads"
      },
      {
        "id": 9,
        "upvotes": 11,
        "created_at": "2019-09-12T21:50:12.000Z",
        "updated_at": "2019-09-23T21:50:12.000Z",
        "title": "Broken up sidewalk",
        "issueLocation": "Pioneer Park, near playground",
        "details": "My daughter fell and skinned both knees here, riding her bike.",
        "imageURL": "https://lh3.googleusercontent.com/4hi3uqGnUnxGMKTpad89haL8fkrDWoF4BTRE4n1kTdbB7DjJR4eCyYopnh_bmCmUmKRel5o7-RjwZGreMfhHIvInPR5apMxNv8zwQ5EwRSf-QE4ZtLe-r5DdP2cYhB9Svn600avqeQmEz3wWyOfxD1tv-Izu5lDVVNF5QuJx_VUT2PAFsgBtBcJnam-R8CIFTB2tuCxkUlRGa1x_EbTq78bzKqjbmMLplHO4zczMHRMXqdKyCsTjn8NotbGCRFAsTke0X187v4e6h4ntSvZKvpnNZT_N0AInK_5-2T4UFqcOJhWKfAJUkOwdQrhl7Omvfwu9qyT61r_VC6EB8U1YbqhLuL8B7lX4s8OZv-eWs2Bacg7aJBw-bcw1POOFWCKFXmGU-s33Dmmypp79I_uGqqSK8pLLd2j-rdbGnZDFez8TVoi4Lg0tSZLpDPzeM930Sxr4hyV4IzQwkdY9QjG6rJ1hj1-VvN7kTjtzaTJ1D0rMm29Cy8Ww70KlhM-I6IpoBjKnj6pYAhZAMjoK8vfPJhOcVemgropKUyQNTGsdH9fre0bRwa64zk1Ag-RmvwVp92RG7g7lCOoiBgNZs4YQcIzg0MU17_doyNAFyNjVIrhNKA_V8XS9Uia4pSuANcIUwwBd8xC0pxTDiyQt6Gz6Q7CZb3e9o_XnBwqeCCSIXEN5deUJX4gSdEvhRnN8Nwn1Hw5YVdgw1XTS-c6u0HKtZupRH9H3vOj49zcEnqizCsGb6D_D=w1258-h943-no",
        "user_id": 9,
        "category": "sidewalks"
      },
      {
        "id": 2,
        "upvotes": 10,
        "created_at": "2019-09-23T21:50:12.000Z",
        "updated_at": "2019-09-23T21:50:12.000Z",
        "title": "Pothole near drain",
        "issueLocation": "90 Cherry Hill Ave.",
        "details": "This is a major asphalt erosion problem. I ran my car over this last week and got a flat tire",
        "imageURL": "https://lh3.googleusercontent.com/ZvKWtnvPaKLPhl9Ls2PTCceSkiO6wQO90gW2RW8gTPu3vEgpg03qFAvb0JOzYcYea0Z9-u-OOMY2malr20TuS8JCWgwGQBeJBP29h_mtOa7u0F53K9kZeJXhVhS6olk3LutvPlkkcQdASRzzKDZNu8HYbJFe9xFgveNHKWeDnOI0KpXNh9upvi2MrAUvV-jHr5NU8ZsabwJbBohe0-CDWGaxRlDFsu_dosy0FODFDu60PN0UpffsWBIhFWBJWMTj9OM_WmEYwNc0jwNNbKHd2-WuphJVgEYTcERj-tXS7a-kzC2iHm1bO0eSFMaYcI4deIVn5f2LLJnvqX21h65Q0y_78bcM9enrv_JQxMKLBYD5qlAjkCXXYcj3VsZzre_Pv2LM2HQ4Ue1MNFcaVnlfIbtScVXX_VearqVHTiYPWxysjO1khWVoYM0Hxhe0dAVANwJxYOkBfbyrZ6j5jwEMuWU7d9mRW_KRNJVyxCoP1XA9m4iYH7pKBw2-5USAWApb4Dsf6nQRS7tNSbihZrOKVnfwd_qNXxiweskXea_HXQQyWcE4WaPDToRlGTKsFT6HctzqkqWgUZPJC8P4RuMNIPHimriutJZw2bTwF3Rn71f1QPK7JMnG8XFGVXkhcBMjoGWcMrEzB3Yk2JqiDfrwzwIybkyMQF4vkwqjVRCDsvQNSL3ov4UU5INe7XEmWoe3R0Uw3td8OaoS9g496Z26lZP-ZQ6BZhfTu-l_NawGdHT7YUHt=w1280-h792-no",
        "user_id": 2,
        "category": "roads"
      },
      {
        "id": 15,
        "upvotes": 10,
        "created_at": "2019-09-03T21:50:12.000Z",
        "updated_at": "2019-09-23T21:50:12.000Z",
        "title": "Needs pruning",
        "issueLocation": "Near 75 W. Grandrose Dr.",
        "details": "People walk in the road because the shrubs and trees are so overgrown here",
        "imageURL": "https://lh3.googleusercontent.com/BWWVOZw_eHIJP5WY_HdfCjFNrApAsrSuE4rzvPKYJrkO_xFDm340LamU_HhsNTJed18e8ka0zS2TzbZq5Unpkb0eGMa1SsYsP4ThSmubT8qwi4MSRCQi-vl1HVQKaxZBvBEwZLyxlxqNXtCWCYsgxssHAELZihoNhr5DvMjInavxBVmk4_dGZYJJ6bX5OmSidrw16PdrrHk6BEGuJ5hhJHUtq_a7D2lzAVJN55_t9M-LKAatpUNWZXBjVeChfsaYMCpPRXsjxyjQ2kQ75xpmeTqFsraTLn0FMvxWFjgGKLpruyHMaJJO1TFuJcg1xp2EY9CNnf9Vk64-1jvF-zBpPM-4SGW7rJ6m8UvhTutJIiS8MfmkoTE1peM_gs7Yl_ItzhmzfvKkD2ALH0ng0Wjd5W40xPerFLCUAetNMEDd0jn-kyCi0J6EiqrJggOLsPD5NWwoAQJrdCJ7k2On1QxGN3Zb53gHJ_HJgOYL84dcnAOLenxS48OuHrcK3Dcwl4Eeb3KrGjOvoF0oLlXnZ5gLA0Kbh_jkT8xdTlYc9NNKBVHXyFqGfmc7H1SrTa_tkgEnrlgKazMOZEky-3YQ7XH5rFQxvxt7YEfYbMevq1hZ-jnpt9xq1KnT3W8imB1gE3LzdJr-3ARNxjlzmtC5Wm7k_U9rZe9zS2-o9Kg9SYtrIUj0CMTpilVaOFjO0MiL3DROjrTg0hp4-Wd-PGHydTPinQYTzGSnIr5-24rTwQXhihgmpcT2=w1199-h672-no",
        "user_id": 6,
        "category": "landscape"
      },
    // ... etc
    ]

### Query Strings on /api/auth/:issues

Optionally, you can change what's returned on this endpoint by putting **?** at the end of the url, and appending key-value pairs as **key=value**, separated by **&.**

Example query:

[**https://comake.herokuapp.com/api/issues?sortby=created_at&category=roads**](https://comake.herokuapp.com/api/issues?sortby=created_at&category=roads)

All are optional. You can use as many or as few in combination as you like. 

- **sortby** can be set to **created_at, updated_at, upvotes** (default already), or any other column in the database (property on the issue objects returned to you)
- **sortdir** can be set to **asc** (ascending) or **desc** (descending)
- **limit** can be any integer. This limits the number of issues returned.
- **category** can be **landscape, roads, sidewalks, other, debris**
- **userid** can be any valid user id. Limits it to issues by this user.

## POST  /api/issues

Adds a new issue. Requires authorization header with valid token. Required fields are **title** and **category.** 

**Title** and **issueLocation** are limited to 255 characters, but the string in the **details** field can be longer. 

Example post:

    {
    	title: "Overgrown tree",
    	issueLocation: "1410 N 2970 W",
    	details: "Tree needs pruning",
    	category: "landscape"
    }

Returns:

Note, "id" here refers to the issue id. "user_id" is the id of the user who posted the issue. 

    {
      "id": 21,
      "upvotes": 1,
      "created_at": "2019-09-25T20:48:12.771Z",
      "updated_at": "2019-09-25T20:48:12.771Z",
      "title": "Overgrown tree",
      "issueLocation": "1410 N 2970 W",
      "details": "Tree needs pruning",
      "imageURL": null,
      "user_id": 5,
      "category": "landscape"
    }

## DEL    /api/issues/:id

Deletes an issue by issue id. Requires authorization. Users can only delete an issue they created. Returns confirmation:

    {
      "message": "Deleted issue 21"
    }

## PUT   /api/issues/:id

Edits an existing issue. User can edit as many or as few fields as they like. It will retain the previous values for those not overwritten. 

Example PUT:

    {
    	issueLocation: "875 Mountainview St."
    }

Returns complete, updated issue:

    {
      "id": 5,
      "upvotes": 5,
      "created_at": "2019-09-22T21:50:12.000Z",
      "updated_at": "2019-09-22T21:50:12.000Z",
      "title": "Leaves all over sidewalk",
      "issueLocation": "875 Mountainview St.",
      "details": "Someone please come by with a leaf blower. We can't find the sidewalk",
      "imageURL": "https://lh3.googleusercontent.com/SiNDKfHYI7lLC7hSwmDIBSPFjrIeBIvMJrF75bBGjHao-JMQeGoU1ayPxUEZmbM1ADh7Eq41sYXJKYm1q3NlMxVXYxF3cA9zMqScJ2qpUMsVJqrPZFZG1dH-Ef0SvFkw44Rg9SU9GuUXlvcEA8x7UCACdtqh-C0_4wc_IkD6Sel6ZoCeqQGtrli5GRGHOZ5_W5mESyogFGtiATExew4MB0W2H7xrWdVrJJWMJbNzTsqS9A_2UDuoJFE2p1WuG0mKccqGKhDLxRXv2Q9iEUnAmne6iNe2mIzseF1MHekh5lSrmix_0BBQ_HFN4BV1VYJ-PdEuXRU0Tk040wI1Mpx5Nyh55o5wP8k4BENLLQRx5AUDUTOz1u1z_D8awDfD_15k3kbxV-b4HTlIUQxRfvUV6krH5Fx8uriAVpgEc-50ozldTrPVab6_BQei0KffnQYrsxqrxKtDZzqPt9cQK3SK-G1VHQ6qiOYuRpReY3jc6FvysFQWS9Gbe48R38kxRDeqyXYGUeVHLJUChbM316N6Ss0iFWb4GEK2JbQePTXT2UwaL3U7Q0my2KIQRUQmI0yUo1MQAWWxuZD9Yuu1IeqTkRq0cCGcDACY73YDHvkvAx1IGZEc-kc5zFHFad5yqcAdcUhpq8A9D3VDJZDBAhIUvoQjyx0UosntC3AtsILQv9ueVHE1Se8Atm6mYOqTqU46AiDylVLN07R86y5YiwWTFOsonluZNxeWSJ-YNX9HOJwP0EwK=w1024-h768-no",
      "user_id": 5,
      "category": "debris"
    }

## PUT   /api/issues/:id/upvote

Upvotes an issue. Requires authorization token. A user can only upvote once. No body in PUT.

Returned after successful upvote:

    {
      "message": "upvoted"
    }

After trying to upvote twice:

    {
      "message": "User has already upvoted this issue."
    }

## PUT   /api/issues/:id/downvote

Users can only 'downvote' after they have upvoted an issue. Think of it as undoing the upvote.

Success:

    {
      "message": "downvoted"
    }

If user has already downvoted:

    {
      "message": "User has already downvoted this issue."
    }

If the user tries to downvote something they've never upvoted.

    {
      "message": "Must upvote first"
    }
