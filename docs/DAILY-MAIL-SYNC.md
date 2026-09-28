# Daily family email sync

The scheduled GitHub Action reads **nagaraj957@gmail.com** at approximately **06:00 India time** daily, or on manual dispatch. It creates Home Manager messages and calendar **suggestions**, never sends email or writes events to Google Calendar.

## Required configuration

In this repository's **Settings â†’ Secrets and variables â†’ Actions**, configure:

- `GMAIL_CLIENT_ID`: your Google OAuth application's client ID.
- `GMAIL_CLIENT_SECRET`: that application's client secret.
- `GMAIL_REFRESH_TOKEN`: an offline refresh token authorized by **nagaraj957@gmail.com** for `https://www.googleapis.com/auth/gmail.readonly`.
- `MAIL_FEED_PASSWORD`: a unique random passphrase of at least 20 characters. Use the same passphrase to unlock the feed in Home Manager.

Enable Gmail API in the OAuth application's Google Cloud project. Configure OAuth consent and authorize the named account with offline access; use a trusted local OAuth flow to obtain the refresh token. Do not put OAuth credentials, refresh tokens, email exports, or the feed passphrase in source files, workflow inputs, issues, or chat. External OAuth apps in Testing can have refresh tokens expire after seven days; configure an appropriate production/internal consent status for reliable automation. OAuth authorization and repository secrets must be supplied before recurring fetches can run. A manual **Daily encrypted family mail sync** run validates setup. Missing or invalid credentials fail clearly; the site must not claim the job is connected merely because the workflow exists.

## Selection and conversion

Initial sync covers the previous **30 days**, across received mail excluding spam, trash, sent, and drafts. Subsequent runs overlap the last successful timestamp by two days and deduplicate Gmail message IDs. The authoritative filter checks each actual sender address case-insensitively and excludes **any address containing `peepal`**, regardless of display name or Gmail search behavior. Routine subject-tagged OTPs, newsletters, and sales offers are skipped; operational/family messages are retained. This intentionally conservative deterministic parser can miss messages; it does not infer urgency or summarize with an AI service.

Calendar suggestions require an event/action cue and an explicit valid date including a year, in `YYYY-MM-DD` or `DD/MM/YYYY` / `DD-MM-YYYY` form, or an English month name with a day and year. Times use `HH:mm` with optional AM/PM. Bare transaction, invoice, and statement dates are not scheduled. Ambiguous or relative dates, dates without a year, and attachments are retained as messages for review, rather than guessed. Every extracted event is marked `needsReview: true`. Review suggestions before relying on the calendar. Names in content may suggest a family member; ambiguous references remain family-wide.

## Privacy and feed format

GitHub Pages and this repository are public. The only committed mail output is **`data/mail-sync.enc.json`**: AES-256-GCM authenticated ciphertext with a fresh 16-byte salt, 12-byte nonce, PBKDF2-SHA256 key derivation (310,000 iterations), and a 16-byte authentication tag appended to ciphertext. Envelope properties: `schema`, `algorithm`, `kdf`, `iterations`, `salt`, `iv`, `ciphertext`; binary values are standard base64. Browser WebCrypto decrypts with the passphrase; plaintext is never emitted by the job or written as a file. Sender filtering happens before encryption. Strong passphrases matter because ciphertext is publicly downloadable and can be attacked offline.

Decrypted payload: `{schema:1, account, syncedAt, messages, events, processedIds}`. Messages include `id`, `gmailId`, `subject`, `sender`, `receivedAt`, `body`, `memberHint`, `source:'gmail'`. Events include `id`, `gmailId`, `title`, `date`, `time`, `description`, `memberHint`, `needsReview:true`, `source:'gmail'`. Bodies are limited to 30,000 characters and HTML is converted to inert text. No attachments are downloaded. Local UI must render imported content as text and never execute it.

The cumulative feed is decrypted in memory and re-encrypted each run. Keep the passphrase: replacing the secret without first migrating the existing feed causes the job to fail safely, preserving prior data. Source mailbox deletions are not mirrored automatically. Historical encrypted snapshots remain in Git history. Clearing local imports does not delete the remote encrypted feed.

Only the encrypted feed is staged by the bot. A bot push does not trigger another mail job (the workflow has no push trigger); deployment is dispatched explicitly because `GITHUB_TOKEN` pushes do not start normal push workflows. GitHub schedules are best effort and may be disabled after repository inactivity. Manual dispatch remains available.

## Local verification

Run `node --test scripts/mail-sync/sync.test.mjs`. Tests cover ciphertext tampering/wrong password, sender exclusions, invalid dates, explicit event extraction, and repeated-run deduplication. Running the live sync requires the four environment secrets; no token is needed for tests.

