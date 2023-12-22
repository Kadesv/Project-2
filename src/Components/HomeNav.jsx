
export default function HomeNav() {
  return (
    <nav class="bg-body-tertiary navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a href="/" class="navbar-brand">Ask Away Forums</a>
        <button type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
          <span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse">
          <div class="navbar-nav"><a href="/sign" data-rr-ui-event-key="/sign" class="nav-link">Login</a>
            <a href="/account" data-rr-ui-event-key="/account" class="nav-link">Account</a>
          </div>
        </div>
      </div>
    </nav>
  );
}