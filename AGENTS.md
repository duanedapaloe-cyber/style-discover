<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Page architecture
- Keep the promotion as a single home route with semantic anchor-linked disclosures; it needs no account system or persistence.
- Store the replaceable partner destination in OFFER_DESTINATION and keep it on the local offer-disclosure anchor until a verified URL is supplied, so the page never implies an unavailable signup flow.
- Express visual styling through global semantic tokens and the shared Button component for consistent presentation.
