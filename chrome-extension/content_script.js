
(() => {
	const errTitleElement = document.querySelector('.errtitle');
	if (!errTitleElement) return;

	const errTitle = errTitleElement.textContent;
	if (errTitle !== 'ページを表示できません') return;
	
	if (document.body.textContent.includes('DNSエラーです。')) {
		chrome.runtime.sendMessage({
			method: 'delete_history',
		});
	}
})();
