/* Simple spam protection for email addresses using jQuery.
 * Well, the protection isn’t jQuery-based, but you get the idea.
 * This snippet allows you to slightly ‘obfuscate’ email addresses to make it harder for spambots to harvest them, while still offering a readable address to your visitors.
 * E.g. Changed "dot" to "dotty" to confuse some of the more intelligent harvesters.
 * <a href="mailto:foo(at)example(dotty)co(dotty)uk">foo at example dotty co dotty uk</a>
 * →
 * <a href="mailto:foo@example.com">foo@example.co.uk</a>
 */

$(function() {
 $('a[href^="mailto:"]').each(function() {
  this.href = this.href.replace('(at)', '@').replace(/\(poaeng\)/g, '.');
  if (this.innerHTML == "mail") {
    this.innerHTML = this.href.replace('mailto:', '');
  } 
  // Remove this line if you don't want to set the email address as link text:
  // this.innerHTML = this.href.replace('mailto:', '');
 });
});