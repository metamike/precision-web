$('.account-picker').each(function() {
  e = $(this);
  $.getJSON('http://192.168.0.104:9292/accounts', function(accounts) {
    grouped_accounts = {};
    groups = [];
    $.each(accounts['data'], function(i, account) {
      if (!grouped_accounts.hasOwnProperty(account['type'])) {
        grouped_accounts[account['type']] = [];
        groups.push(account['type']);
      }
      grouped_accounts[account['type']].push(account);
    });
    e.append('<option selected="selected">All</option>');
    $.each(groups, function(i, group) {
      opt_group = $("<optgroup label=\"" + group + "\">");
      $.each(grouped_accounts[group], function(i, account) {
        opt_group.append('<option data-icon="assets/accounts/' + account.type.toLowerCase() + '.png">' + account.name + '</option>');
      });
      e.append(opt_group);
    });
  });
});

$('select').selectpicker();
