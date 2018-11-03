let s_package = '';
process.stdin.setEncoding('utf8');
process.stdin
	.on('data', (s_chunk) => {
		s_package += s_chunk;
	})
	.on('end', () => {
		let g_package = JSON.parse(s_package);

		// generate channel json for package
		let g_channel = {
			schema_version: '3.0.0',
			packages: [
				{
					name: 'LinkedData',
					details: 'https://github.com/blake-regalia/linked-data.syntaxes',
					labels: [
						'semantic web', 'linked data', 'rdf',
						'n-triples',
						'n-quads',
						'turtle',
						'trig',
						'n3', 'notation3',
						'sparql',
					],
					releases: [
						{
							platforms: ['*'],
							version: g_package.version,
							sublime_text: ">=3000",
							url: `https://github.com/blake-regalia/linked-data.syntaxes/releases/download/v${g_package.version}/LinkedData.sublime-package`,
							date: (new Date()).toISOString().replace(/T/, ' ').replace(/\.\d+Z/, ''),
						},
					],
				},
			],
		};

		// dump to output
		process.stdout.write(JSON.stringify(g_channel, null, '\t'));
	});