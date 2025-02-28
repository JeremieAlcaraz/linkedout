migrate((db) => {
    const snapshot = [
        {
          "id": "pbc_3142635823",
          "listRule": null,
          "viewRule": null,
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "name": "_superusers",
          "type": "auth",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "cost": 0,
              "hidden": true,
              "id": "password901924565",
              "max": 0,
              "min": 8,
              "name": "password",
              "pattern": "",
              "presentable": false,
              "required": true,
              "system": true,
              "type": "password"
            },
            {
              "autogeneratePattern": "[a-zA-Z0-9]{50}",
              "hidden": true,
              "id": "text2504183744",
              "max": 60,
              "min": 30,
              "name": "tokenKey",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "exceptDomains": null,
              "hidden": false,
              "id": "email3885137012",
              "name": "email",
              "onlyDomains": null,
              "presentable": false,
              "required": true,
              "system": true,
              "type": "email"
            },
            {
              "hidden": false,
              "id": "bool1547992806",
              "name": "emailVisibility",
              "presentable": false,
              "required": false,
              "system": true,
              "type": "bool"
            },
            {
              "hidden": false,
              "id": "bool256245529",
              "name": "verified",
              "presentable": false,
              "required": false,
              "system": true,
              "type": "bool"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE UNIQUE INDEX `idx_tokenKey_pbc_3142635823` ON `_superusers` (`tokenKey`)",
            "CREATE UNIQUE INDEX `idx_email_pbc_3142635823` ON `_superusers` (`email`) WHERE `email` != ''"
          ],
          "system": true,
          "authRule": "",
          "manageRule": null,
          "authAlert": {
            "enabled": true,
            "emailTemplate": {
              "subject": "Login from a new location",
              "body": "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location.</p>\n<p>If this was you, you may disregard this email.</p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
            }
          },
          "oauth2": {
            "mappedFields": {
              "id": "",
              "name": "",
              "username": "",
              "avatarURL": ""
            },
            "enabled": false
          },
          "passwordAuth": {
            "enabled": true,
            "identityFields": [
              "email"
            ]
          },
          "mfa": {
            "enabled": false,
            "duration": 1800,
            "rule": ""
          },
          "otp": {
            "enabled": false,
            "duration": 180,
            "length": 8,
            "emailTemplate": {
              "subject": "OTP for {APP_NAME}",
              "body": "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
            }
          },
          "authToken": {
            "duration": 86400
          },
          "passwordResetToken": {
            "duration": 1800
          },
          "emailChangeToken": {
            "duration": 1800
          },
          "verificationToken": {
            "duration": 259200
          },
          "fileToken": {
            "duration": 180
          },
          "verificationTemplate": {
            "subject": "Verify your {APP_NAME} email",
            "body": "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          },
          "resetPasswordTemplate": {
            "subject": "Reset your {APP_NAME} password",
            "body": "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          },
          "confirmEmailChangeTemplate": {
            "subject": "Confirm your {APP_NAME} new email address",
            "body": "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          }
        },
        {
          "id": "_pb_users_auth_",
          "listRule": "id = @request.auth.id",
          "viewRule": "id = @request.auth.id",
          "createRule": "",
          "updateRule": "id = @request.auth.id",
          "deleteRule": "id = @request.auth.id",
          "name": "users",
          "type": "auth",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "cost": 0,
              "hidden": true,
              "id": "password901924565",
              "max": 0,
              "min": 8,
              "name": "password",
              "pattern": "",
              "presentable": false,
              "required": true,
              "system": true,
              "type": "password"
            },
            {
              "autogeneratePattern": "[a-zA-Z0-9]{50}",
              "hidden": true,
              "id": "text2504183744",
              "max": 60,
              "min": 30,
              "name": "tokenKey",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "exceptDomains": null,
              "hidden": false,
              "id": "email3885137012",
              "name": "email",
              "onlyDomains": null,
              "presentable": false,
              "required": true,
              "system": true,
              "type": "email"
            },
            {
              "hidden": false,
              "id": "bool1547992806",
              "name": "emailVisibility",
              "presentable": false,
              "required": false,
              "system": true,
              "type": "bool"
            },
            {
              "hidden": false,
              "id": "bool256245529",
              "name": "verified",
              "presentable": false,
              "required": false,
              "system": true,
              "type": "bool"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1579384326",
              "max": 255,
              "min": 0,
              "name": "name",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "file376926767",
              "maxSelect": 1,
              "maxSize": 0,
              "mimeTypes": [
                "image/jpeg",
                "image/png",
                "image/svg+xml",
                "image/gif",
                "image/webp"
              ],
              "name": "avatar",
              "presentable": false,
              "protected": false,
              "required": false,
              "system": false,
              "thumbs": null,
              "type": "file"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": false,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": false,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE UNIQUE INDEX `idx_tokenKey__pb_users_auth_` ON `users` (`tokenKey`)",
            "CREATE UNIQUE INDEX `idx_email__pb_users_auth_` ON `users` (`email`) WHERE `email` != ''"
          ],
          "system": false,
          "authRule": "",
          "manageRule": null,
          "authAlert": {
            "enabled": true,
            "emailTemplate": {
              "subject": "Login from a new location",
              "body": "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location.</p>\n<p>If this was you, you may disregard this email.</p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
            }
          },
          "oauth2": {
            "mappedFields": {
              "id": "",
              "name": "name",
              "username": "",
              "avatarURL": "avatar"
            },
            "enabled": false
          },
          "passwordAuth": {
            "enabled": true,
            "identityFields": [
              "email"
            ]
          },
          "mfa": {
            "enabled": false,
            "duration": 1800,
            "rule": ""
          },
          "otp": {
            "enabled": false,
            "duration": 180,
            "length": 8,
            "emailTemplate": {
              "subject": "OTP for {APP_NAME}",
              "body": "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
            }
          },
          "authToken": {
            "duration": 604800
          },
          "passwordResetToken": {
            "duration": 1800
          },
          "emailChangeToken": {
            "duration": 1800
          },
          "verificationToken": {
            "duration": 259200
          },
          "fileToken": {
            "duration": 180
          },
          "verificationTemplate": {
            "subject": "Verify your {APP_NAME} email",
            "body": "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          },
          "resetPasswordTemplate": {
            "subject": "Reset your {APP_NAME} password",
            "body": "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          },
          "confirmEmailChangeTemplate": {
            "subject": "Confirm your {APP_NAME} new email address",
            "body": "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          }
        },
        {
          "id": "pbc_4275539003",
          "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "createRule": null,
          "updateRule": null,
          "deleteRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "name": "_authOrigins",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text455797646",
              "max": 0,
              "min": 0,
              "name": "collectionRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text127846527",
              "max": 0,
              "min": 0,
              "name": "recordRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text4228609354",
              "max": 0,
              "min": 0,
              "name": "fingerprint",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE UNIQUE INDEX `idx_authOrigins_unique_pairs` ON `_authOrigins` (collectionRef, recordRef, fingerprint)"
          ],
          "system": true
        },
        {
          "id": "pbc_2281828961",
          "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "createRule": null,
          "updateRule": null,
          "deleteRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "name": "_externalAuths",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text455797646",
              "max": 0,
              "min": 0,
              "name": "collectionRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text127846527",
              "max": 0,
              "min": 0,
              "name": "recordRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text2462348188",
              "max": 0,
              "min": 0,
              "name": "provider",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1044722854",
              "max": 0,
              "min": 0,
              "name": "providerId",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE UNIQUE INDEX `idx_externalAuths_record_provider` ON `_externalAuths` (collectionRef, recordRef, provider)",
            "CREATE UNIQUE INDEX `idx_externalAuths_collection_provider` ON `_externalAuths` (collectionRef, provider, providerId)"
          ],
          "system": true
        },
        {
          "id": "pbc_2279338944",
          "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "name": "_mfas",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text455797646",
              "max": 0,
              "min": 0,
              "name": "collectionRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text127846527",
              "max": 0,
              "min": 0,
              "name": "recordRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1582905952",
              "max": 0,
              "min": 0,
              "name": "method",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE INDEX `idx_mfas_collectionRef_recordRef` ON `_mfas` (collectionRef,recordRef)"
          ],
          "system": true
        },
        {
          "id": "pbc_1638494021",
          "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "name": "_otps",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text455797646",
              "max": 0,
              "min": 0,
              "name": "collectionRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text127846527",
              "max": 0,
              "min": 0,
              "name": "recordRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "cost": 8,
              "hidden": true,
              "id": "password901924565",
              "max": 0,
              "min": 0,
              "name": "password",
              "pattern": "",
              "presentable": false,
              "required": true,
              "system": true,
              "type": "password"
            },
            {
              "autogeneratePattern": "",
              "hidden": true,
              "id": "text3866985172",
              "max": 0,
              "min": 0,
              "name": "sentTo",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": true,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE INDEX `idx_otps_collectionRef_recordRef` ON `_otps` (collectionRef, recordRef)"
          ],
          "system": true
        },
        {
          "id": "pbc_725385852",
          "listRule": "",
          "viewRule": "",
          "createRule": "@request.auth.id != \"\"",
          "updateRule": "@request.auth.id != \"\"",
          "deleteRule": "@request.auth.id != \"\"",
          "name": "inboxes",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text770105660",
              "max": 0,
              "min": 0,
              "name": "chatId",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "convertURLs": false,
              "hidden": false,
              "id": "editor3065852031",
              "maxSize": 0,
              "name": "message",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "editor"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text2764284122",
              "max": 0,
              "min": 0,
              "name": "messageId",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "date2782324286",
              "max": "",
              "min": "",
              "name": "timestamp",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "date"
            },
            {
              "cascadeDelete": false,
              "collectionId": "pbc_520427368",
              "hidden": false,
              "id": "relation1593854671",
              "maxSelect": 1,
              "minSelect": 0,
              "name": "sender",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "relation"
            },
            {
              "hidden": false,
              "id": "select105650625",
              "maxSelect": 1,
              "name": "category",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "select",
              "values": [
                "love-your-content",
                "collab-proposal"
              ]
            },
            {
              "hidden": false,
              "id": "bool1985015592",
              "name": "isFromMe",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "bool"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": false,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": false,
              "type": "autodate"
            }
          ],
          "indexes": [],
          "system": false
        },
        {
          "id": "pbc_520427368",
          "listRule": "@request.auth.id != \"\"",
          "viewRule": "@request.auth.id != \"\"",
          "createRule": "@request.auth.id != \"\"",
          "updateRule": "@request.auth.id != \"\"",
          "deleteRule": null,
          "name": "people",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "exceptDomains": null,
              "hidden": false,
              "id": "url869342508",
              "name": "linkedinUrl",
              "onlyDomains": null,
              "presentable": false,
              "required": false,
              "system": false,
              "type": "url"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1579384326",
              "max": 0,
              "min": 0,
              "name": "firstName",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "cascadeDelete": false,
              "collectionId": "pbc_725385852",
              "hidden": false,
              "id": "relation1542800728",
              "maxSelect": 999,
              "minSelect": 0,
              "name": "messages",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "relation"
            },
            {
              "hidden": false,
              "id": "number2215181735",
              "max": null,
              "min": null,
              "name": "followers",
              "onlyInt": false,
              "presentable": false,
              "required": false,
              "system": false,
              "type": "number"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text2434144904",
              "max": 0,
              "min": 0,
              "name": "lastName",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "exceptDomains": null,
              "hidden": false,
              "id": "url376926767",
              "name": "avatar",
              "onlyDomains": null,
              "presentable": false,
              "required": false,
              "system": false,
              "type": "url"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": false,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": false,
              "type": "autodate"
            }
          ],
          "indexes": [],
          "system": false
        },
        {
          "id": "pbc_321265102",
          "listRule": null,
          "viewRule": null,
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "name": "textSnippets",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1579384326",
              "max": 128,
              "min": 0,
              "name": "name",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": false,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text494360628",
              "max": 0,
              "min": 0,
              "name": "value",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": false,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": false,
              "type": "autodate"
            }
          ],
          "indexes": [],
          "system": false
        }
      ];

    const collections = snapshot.map((item) => new Collection(item));
    return Dao(db).importCollections(collections, true);
}, (db) => {
    // Down migration - use the same schema
    const snapshot = [
        {
          "id": "pbc_3142635823",
          "listRule": null,
          "viewRule": null,
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "name": "_superusers",
          "type": "auth",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "cost": 0,
              "hidden": true,
              "id": "password901924565",
              "max": 0,
              "min": 8,
              "name": "password",
              "pattern": "",
              "presentable": false,
              "required": true,
              "system": true,
              "type": "password"
            },
            {
              "autogeneratePattern": "[a-zA-Z0-9]{50}",
              "hidden": true,
              "id": "text2504183744",
              "max": 60,
              "min": 30,
              "name": "tokenKey",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "exceptDomains": null,
              "hidden": false,
              "id": "email3885137012",
              "name": "email",
              "onlyDomains": null,
              "presentable": false,
              "required": true,
              "system": true,
              "type": "email"
            },
            {
              "hidden": false,
              "id": "bool1547992806",
              "name": "emailVisibility",
              "presentable": false,
              "required": false,
              "system": true,
              "type": "bool"
            },
            {
              "hidden": false,
              "id": "bool256245529",
              "name": "verified",
              "presentable": false,
              "required": false,
              "system": true,
              "type": "bool"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE UNIQUE INDEX `idx_tokenKey_pbc_3142635823` ON `_superusers` (`tokenKey`)",
            "CREATE UNIQUE INDEX `idx_email_pbc_3142635823` ON `_superusers` (`email`) WHERE `email` != ''"
          ],
          "system": true,
          "authRule": "",
          "manageRule": null,
          "authAlert": {
            "enabled": true,
            "emailTemplate": {
              "subject": "Login from a new location",
              "body": "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location.</p>\n<p>If this was you, you may disregard this email.</p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
            }
          },
          "oauth2": {
            "mappedFields": {
              "id": "",
              "name": "",
              "username": "",
              "avatarURL": ""
            },
            "enabled": false
          },
          "passwordAuth": {
            "enabled": true,
            "identityFields": [
              "email"
            ]
          },
          "mfa": {
            "enabled": false,
            "duration": 1800,
            "rule": ""
          },
          "otp": {
            "enabled": false,
            "duration": 180,
            "length": 8,
            "emailTemplate": {
              "subject": "OTP for {APP_NAME}",
              "body": "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
            }
          },
          "authToken": {
            "duration": 86400
          },
          "passwordResetToken": {
            "duration": 1800
          },
          "emailChangeToken": {
            "duration": 1800
          },
          "verificationToken": {
            "duration": 259200
          },
          "fileToken": {
            "duration": 180
          },
          "verificationTemplate": {
            "subject": "Verify your {APP_NAME} email",
            "body": "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          },
          "resetPasswordTemplate": {
            "subject": "Reset your {APP_NAME} password",
            "body": "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          },
          "confirmEmailChangeTemplate": {
            "subject": "Confirm your {APP_NAME} new email address",
            "body": "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          }
        },
        {
          "id": "_pb_users_auth_",
          "listRule": "id = @request.auth.id",
          "viewRule": "id = @request.auth.id",
          "createRule": "",
          "updateRule": "id = @request.auth.id",
          "deleteRule": "id = @request.auth.id",
          "name": "users",
          "type": "auth",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "cost": 0,
              "hidden": true,
              "id": "password901924565",
              "max": 0,
              "min": 8,
              "name": "password",
              "pattern": "",
              "presentable": false,
              "required": true,
              "system": true,
              "type": "password"
            },
            {
              "autogeneratePattern": "[a-zA-Z0-9]{50}",
              "hidden": true,
              "id": "text2504183744",
              "max": 60,
              "min": 30,
              "name": "tokenKey",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "exceptDomains": null,
              "hidden": false,
              "id": "email3885137012",
              "name": "email",
              "onlyDomains": null,
              "presentable": false,
              "required": true,
              "system": true,
              "type": "email"
            },
            {
              "hidden": false,
              "id": "bool1547992806",
              "name": "emailVisibility",
              "presentable": false,
              "required": false,
              "system": true,
              "type": "bool"
            },
            {
              "hidden": false,
              "id": "bool256245529",
              "name": "verified",
              "presentable": false,
              "required": false,
              "system": true,
              "type": "bool"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1579384326",
              "max": 255,
              "min": 0,
              "name": "name",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "file376926767",
              "maxSelect": 1,
              "maxSize": 0,
              "mimeTypes": [
                "image/jpeg",
                "image/png",
                "image/svg+xml",
                "image/gif",
                "image/webp"
              ],
              "name": "avatar",
              "presentable": false,
              "protected": false,
              "required": false,
              "system": false,
              "thumbs": null,
              "type": "file"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": false,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": false,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE UNIQUE INDEX `idx_tokenKey__pb_users_auth_` ON `users` (`tokenKey`)",
            "CREATE UNIQUE INDEX `idx_email__pb_users_auth_` ON `users` (`email`) WHERE `email` != ''"
          ],
          "system": false,
          "authRule": "",
          "manageRule": null,
          "authAlert": {
            "enabled": true,
            "emailTemplate": {
              "subject": "Login from a new location",
              "body": "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location.</p>\n<p>If this was you, you may disregard this email.</p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
            }
          },
          "oauth2": {
            "mappedFields": {
              "id": "",
              "name": "name",
              "username": "",
              "avatarURL": "avatar"
            },
            "enabled": false
          },
          "passwordAuth": {
            "enabled": true,
            "identityFields": [
              "email"
            ]
          },
          "mfa": {
            "enabled": false,
            "duration": 1800,
            "rule": ""
          },
          "otp": {
            "enabled": false,
            "duration": 180,
            "length": 8,
            "emailTemplate": {
              "subject": "OTP for {APP_NAME}",
              "body": "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
            }
          },
          "authToken": {
            "duration": 604800
          },
          "passwordResetToken": {
            "duration": 1800
          },
          "emailChangeToken": {
            "duration": 1800
          },
          "verificationToken": {
            "duration": 259200
          },
          "fileToken": {
            "duration": 180
          },
          "verificationTemplate": {
            "subject": "Verify your {APP_NAME} email",
            "body": "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          },
          "resetPasswordTemplate": {
            "subject": "Reset your {APP_NAME} password",
            "body": "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          },
          "confirmEmailChangeTemplate": {
            "subject": "Confirm your {APP_NAME} new email address",
            "body": "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>"
          }
        },
        {
          "id": "pbc_4275539003",
          "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "createRule": null,
          "updateRule": null,
          "deleteRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "name": "_authOrigins",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text455797646",
              "max": 0,
              "min": 0,
              "name": "collectionRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text127846527",
              "max": 0,
              "min": 0,
              "name": "recordRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text4228609354",
              "max": 0,
              "min": 0,
              "name": "fingerprint",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE UNIQUE INDEX `idx_authOrigins_unique_pairs` ON `_authOrigins` (collectionRef, recordRef, fingerprint)"
          ],
          "system": true
        },
        {
          "id": "pbc_2281828961",
          "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "createRule": null,
          "updateRule": null,
          "deleteRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "name": "_externalAuths",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text455797646",
              "max": 0,
              "min": 0,
              "name": "collectionRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text127846527",
              "max": 0,
              "min": 0,
              "name": "recordRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text2462348188",
              "max": 0,
              "min": 0,
              "name": "provider",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1044722854",
              "max": 0,
              "min": 0,
              "name": "providerId",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE UNIQUE INDEX `idx_externalAuths_record_provider` ON `_externalAuths` (collectionRef, recordRef, provider)",
            "CREATE UNIQUE INDEX `idx_externalAuths_collection_provider` ON `_externalAuths` (collectionRef, provider, providerId)"
          ],
          "system": true
        },
        {
          "id": "pbc_2279338944",
          "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "name": "_mfas",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text455797646",
              "max": 0,
              "min": 0,
              "name": "collectionRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text127846527",
              "max": 0,
              "min": 0,
              "name": "recordRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1582905952",
              "max": 0,
              "min": 0,
              "name": "method",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE INDEX `idx_mfas_collectionRef_recordRef` ON `_mfas` (collectionRef,recordRef)"
          ],
          "system": true
        },
        {
          "id": "pbc_1638494021",
          "listRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "viewRule": "@request.auth.id != '' && recordRef = @request.auth.id && collectionRef = @request.auth.collectionId",
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "name": "_otps",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text455797646",
              "max": 0,
              "min": 0,
              "name": "collectionRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text127846527",
              "max": 0,
              "min": 0,
              "name": "recordRef",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "cost": 8,
              "hidden": true,
              "id": "password901924565",
              "max": 0,
              "min": 0,
              "name": "password",
              "pattern": "",
              "presentable": false,
              "required": true,
              "system": true,
              "type": "password"
            },
            {
              "autogeneratePattern": "",
              "hidden": true,
              "id": "text3866985172",
              "max": 0,
              "min": 0,
              "name": "sentTo",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": true,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": true,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": true,
              "type": "autodate"
            }
          ],
          "indexes": [
            "CREATE INDEX `idx_otps_collectionRef_recordRef` ON `_otps` (collectionRef, recordRef)"
          ],
          "system": true
        },
        {
          "id": "pbc_725385852",
          "listRule": "",
          "viewRule": "",
          "createRule": "@request.auth.id != \"\"",
          "updateRule": "@request.auth.id != \"\"",
          "deleteRule": "@request.auth.id != \"\"",
          "name": "inboxes",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text770105660",
              "max": 0,
              "min": 0,
              "name": "chatId",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "convertURLs": false,
              "hidden": false,
              "id": "editor3065852031",
              "maxSize": 0,
              "name": "message",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "editor"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text2764284122",
              "max": 0,
              "min": 0,
              "name": "messageId",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "date2782324286",
              "max": "",
              "min": "",
              "name": "timestamp",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "date"
            },
            {
              "cascadeDelete": false,
              "collectionId": "pbc_520427368",
              "hidden": false,
              "id": "relation1593854671",
              "maxSelect": 1,
              "minSelect": 0,
              "name": "sender",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "relation"
            },
            {
              "hidden": false,
              "id": "select105650625",
              "maxSelect": 1,
              "name": "category",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "select",
              "values": [
                "love-your-content",
                "collab-proposal"
              ]
            },
            {
              "hidden": false,
              "id": "bool1985015592",
              "name": "isFromMe",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "bool"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": false,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": false,
              "type": "autodate"
            }
          ],
          "indexes": [],
          "system": false
        },
        {
          "id": "pbc_520427368",
          "listRule": "@request.auth.id != \"\"",
          "viewRule": "@request.auth.id != \"\"",
          "createRule": "@request.auth.id != \"\"",
          "updateRule": "@request.auth.id != \"\"",
          "deleteRule": null,
          "name": "people",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "exceptDomains": null,
              "hidden": false,
              "id": "url869342508",
              "name": "linkedinUrl",
              "onlyDomains": null,
              "presentable": false,
              "required": false,
              "system": false,
              "type": "url"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1579384326",
              "max": 0,
              "min": 0,
              "name": "firstName",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "cascadeDelete": false,
              "collectionId": "pbc_725385852",
              "hidden": false,
              "id": "relation1542800728",
              "maxSelect": 999,
              "minSelect": 0,
              "name": "messages",
              "presentable": false,
              "required": false,
              "system": false,
              "type": "relation"
            },
            {
              "hidden": false,
              "id": "number2215181735",
              "max": null,
              "min": null,
              "name": "followers",
              "onlyInt": false,
              "presentable": false,
              "required": false,
              "system": false,
              "type": "number"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text2434144904",
              "max": 0,
              "min": 0,
              "name": "lastName",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "exceptDomains": null,
              "hidden": false,
              "id": "url376926767",
              "name": "avatar",
              "onlyDomains": null,
              "presentable": false,
              "required": false,
              "system": false,
              "type": "url"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": false,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": false,
              "type": "autodate"
            }
          ],
          "indexes": [],
          "system": false
        },
        {
          "id": "pbc_321265102",
          "listRule": null,
          "viewRule": null,
          "createRule": null,
          "updateRule": null,
          "deleteRule": null,
          "name": "textSnippets",
          "type": "base",
          "fields": [
            {
              "autogeneratePattern": "[a-z0-9]{15}",
              "hidden": false,
              "id": "text3208210256",
              "max": 15,
              "min": 15,
              "name": "id",
              "pattern": "^[a-z0-9]+$",
              "presentable": false,
              "primaryKey": true,
              "required": true,
              "system": true,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text1579384326",
              "max": 128,
              "min": 0,
              "name": "name",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": true,
              "system": false,
              "type": "text"
            },
            {
              "autogeneratePattern": "",
              "hidden": false,
              "id": "text494360628",
              "max": 0,
              "min": 0,
              "name": "value",
              "pattern": "",
              "presentable": false,
              "primaryKey": false,
              "required": false,
              "system": false,
              "type": "text"
            },
            {
              "hidden": false,
              "id": "autodate2990389176",
              "name": "created",
              "onCreate": true,
              "onUpdate": false,
              "presentable": false,
              "system": false,
              "type": "autodate"
            },
            {
              "hidden": false,
              "id": "autodate3332085495",
              "name": "updated",
              "onCreate": true,
              "onUpdate": true,
              "presentable": false,
              "system": false,
              "type": "autodate"
            }
          ],
          "indexes": [],
          "system": false
        }
      ];

    const collections = snapshot.map((item) => new Collection(item));
    return Dao(db).importCollections(collections, true);
}); 