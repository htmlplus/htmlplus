import { publish } from 'gh-pages';

publish(
	'build', 
	{
		branch: 'main',
		repo: 'https://github.com/htmlplus/htmlplus.github.io.git',
		user: {
			name: 'Masood Abdolian', 
			email: 'm.abdolian@gmail.com'
		},
		dotfiles: true
	},
	() => 
		console.log('Deploy Complete!')
);
