const isCi = process.env.CI !== undefined;

if (!isCi) {
	require('husky').install();
	require('husky').add('.husky/pre-commit', 'npm run lint');
}
