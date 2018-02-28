
chrome.runtime.onMessage.addListener((message, sender) => {
	if (message.method === 'delete_history') {
		const url = sender.url;

		chrome.history.deleteUrl({url});

		chrome.notifications.create({
			type: chrome.notifications.TemplateType.BASIC,
			// iconUrl は必須のため、（とりあえず）1px * 1px の空画像を使う
			iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=',
			title: '多分DNSエラー',
			message: url,
		});
	}
});
