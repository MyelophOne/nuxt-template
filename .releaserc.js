const emojiMap = {
	build: { icon: '🛠️', section: '🛠️ Build System' },
	chore: { icon: '🧹', section: '🧹 Chores' },
	ci: { icon: '🤖', section: '🤖 Continuous Integration' },
	docs: { icon: '📚', section: '📚 Documentation' },
	feat: { icon: '✨', section: '✨ Features' },
	fix: { icon: '🐛', section: '🐛 Bug Fixes' },
	perf: { icon: '⚡', section: '⚡ Performance Improvements' },
	refactor: { icon: '🔄', section: '🔄 Code Refactoring' },
	revert: { icon: '⏪', section: '⏪ Reverts' },
	style: { icon: '🎨', section: '🎨 Code Style' },
	test: { icon: '📋', section: '📋 Tests' },
	wip: { icon: '⏳', section: '⏳ Work in progress' },
	breaking: { icon: '💥', section: '💥 Breaking Changes' },
};

function transform(commit) {
	if (commit.message.startsWith('Merge ')) {
		return null;
	}

	const map = emojiMap[commit.type];
	if (!map || commit.type === 'chore') {
		return null;
	}

	const transformedCommit = { ...commit, type: map.section, emoji: map.icon };
	if (transformedCommit.notes?.length) {
		transformedCommit.notes = transformedCommit.notes.map((note) => ({
			...note,
			title: emojiMap.breaking.section,
		}));
	}

	return transformedCommit;
}

export default {
	branches: ['main'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'conventionalcommits',
				parserOpts: {
					noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
					mergePattern: /^Merge pull request #(\d+) from (.*)$/,
					mergeCorrespondence: ['pr', 'source'],
				},
				releaseRules: [
					{ breaking: true, release: 'major' },
					{ type: 'feat', release: 'minor' },
					{ type: 'fix', release: 'patch' },
					{ type: 'perf', release: 'patch' },
					{ type: 'refactor', release: false },
					{ type: 'test', release: false },
					{ type: 'build', release: false },
					{ type: 'ci', release: false },
					{ type: 'style', release: false },
					{ type: 'docs', release: false },
					{ type: 'revert', release: false },
					{ type: 'chore', release: false },
					{ type: 'wip', release: false },
				],
				preMajor: false,
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{
				preset: 'conventionalcommits',
				parserOpts: {
					noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
					mergePattern: null,
					mergeCorrespondence: [],
				},
				writerOpts: {
					transform,
					headerPartial: '## 📦 Release {{version}} ({{date}})\n',
					mainTemplate:
						'{{> header}}\n' +
						'{{#each noteGroups}}### {{title}}\n{{#each notes}}- {{text}}\n{{/each}}{{#unless @last}}\n{{/unless}}{{/each}}' +
						'{{#each commitGroups}}### {{title}}\n{{#each commits}}{{> commit root=@root}}{{/each}}{{#unless @last}}\n{{/unless}}{{/each}}',
					commitPartial: '- {{subject}}\n',
					groupBy: 'type',
					commitGroupsSort: 'title',
					commitsSort: ['subject'],
					noteGroupsSort: 'title',
				},
			},
		],
		['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
		[
			'@semantic-release/npm',
			{
				npmPublish: false,
				pkgRoot: '.',
			},
		],
		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'package.json'],
				// biome-ignore lint/suspicious/noTemplateCurlyInString: semantic-release template
				message:
					'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
	],
};
