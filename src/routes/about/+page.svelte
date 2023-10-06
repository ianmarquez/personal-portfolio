<script lang="ts">
	import { Experience } from '$lib/components';
	import { skills } from '$lib/constants';
</script>

<div class="max-w-6xl flex flex-col gap-5 mx-auto my-10">
	<h1 class="font-bold uppercase text-2xl sm:text-5xl text-primary">Marquez, Ian Regil</h1>
	<p class="max-w-3xl">
		I'm a sofware developer with 10+ years of industry experience. Outgoing and output-oriented.
		Capable of working unsupervised and would not settle for half-baked solutions. I'm currently a
		full stack developer with experience working on Javascript technologies and stack. I'm currently
		learning Svelte and SvelteKit and am open for opportunities in said stack.
	</p>
	<h2 class="font-bold text-xl sm:text-4xl text-secondary pt-5">Skills</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
		{#each skills as skill}
			<div class="col-span-1 flex flex-row gap-2">
				<span class="font-bold text-[#FFFF80]">+</span>{skill}
			</div>
		{/each}
	</div>
	<h2 class="text-xl font-bold sm:text-4xl text-secondary pt-5">Experience</h2>
	<div class="flex w-full flex-col gap-10 space-around">
		<Experience
			companyName="Aleph Labs, Singapore"
			jobTitle="Software Engineer"
			date="June 2023 - Present"
			technologiesUsed={[
				'ContentStack',
				'Algolia',
				'Next.js',
				'React.js',
				'Framer Motion',
				'Vercel'
			]}
			roles={[
				'Translates figma specs into design.',
				'Tasked with modeling content for CMS keeping in mind maintainability and extendability.',
				'Does peer reviews to ensure code quality is upheld',
				'Developed React components using React.js and Framer Motion',
				'Works closely with designers to tweak and optimize designs for accesibility'
			]}
		/>
		<hr class="w-full border-solid shadow-lg border-primary" />
		<Experience
			companyName="RIDIK, Cognizant SG, Govtech"
			jobTitle="Senior Software Engineer"
			date="September 2022 - June 2023"
			technologiesUsed={['AWS EC2', 'Redis', 'React.js', 'Node.js', 'MySQl', 'Jenkins', 'Express']}
			roles={[
				'Contribute to optimizations of SG Government internal tools mainly MSF and HDB systems',
				'Translates customer requirements from propose to a live product using Node.js, Express and React.js',
				'Does peer reviews to ensure code quality is upheld',
				'Addresses vulnerability and audit findings from third party auditors.',
				'Responsible for fixing show stopping bugs due to experience.',
				'Created POCs for proposed solitions and new functionalities planned to be added in the system.'
			]}
		/>
		<hr class="w-full border-solid shadow-lg border-primary" />
		<Experience
			companyName="Train ALTA, Philippines, Fully Remote"
			jobTitle="Senior Backend Software Engineer"
			date="September 2021 - September 2022"
			technologiesUsed={[
				'AWS EC2',
				'AWS DyanamoDB',
				'AWS SQS',
				'AWS SNS',
				'AWS SES',
				'AWS Cloudformation',
				'React.js',
				'Node.js',
				'Github Actions',
				'Xero',
				'Contentful',
				'Hubspot',
				'Serverless Framework'
			]}
			roles={[
				'Lead the Backend Development Team.',
				'Created AWS Lambda Scripts with SQS, SNS, and SES.',
				'Translate user stories to code Express.js and Serverless',
				'Maintains and formulates solutions to better data integrity across our E-Commerce 3rd party systems.',
				'Delves into Next.js and React.js UI/UX development.',
				'Performs requirements gathering and grooming to create solutions best suited to the problem.'
			]}
		/>
		<hr class="w-full border-solid shadow-lg border-primary" />
		<Experience
			companyName="Nuskin, Philippines, Fully Remote"
			jobTitle="Senior Software Engineer I"
			date="January 2021 - September 2021"
			technologiesUsed={[
				'AWS',
				'Redis',
				'Vue.js',
				'React.js',
				'Angular.js',
				'Node.js',
				'MySQl',
				'Jenkins',
				'Express',
				'Serverless Framework',
				'AEM'
			]}
			roles={[
				'Leads Manila Development Team focused mainly on search and piping data to be interpreted by internal analytics program.',
				'Creates AWS Lambda scripts using Serverless Framework with AWS SQS, AWS SNS and AWS Firehose integrations',
				'Does peer reviews to ensure code quality is upheld',
				'Translates designs from Figma to code using Vue.js, React.js and Angular.js'
			]}
		/>
		<hr class="w-full border-solid shadow-lg border-primary" />
		<Experience
			companyName="Manulife, Philippines, Makati City"
			jobTitle="Senior Software Engineer"
			date="March 2020 - January 2021"
			technologiesUsed={[
				'Node.js',
				'Angular',
				'MongoDB',
				'Azure Functions',
				'Bamboo',
				'Loopback',
				'Confluence',
				'JIRA'
			]}
			roles={[
				'Works on the MOVE platform, a fitness and rewards platform by Manulife.',
				'Creates Node.js scripts to correct and maintain data integrity.',
				'Maintains microservices written in Loopback 3 and Azure functions.',
				'Handles Mongo Database health and data quality.',
				'Works on the frontend with React.js and Angular.',
				'Used Bamboo for CI/CD deployments.'
			]}
		/>
		<hr class="w-full border-solid shadow-lg border-primary" />
		<Experience
			companyName="IScale Solutions, Philippines, Makati City"
			jobTitle="Software Engineer"
			date="July 2019 - January 2020"
			technologiesUsed={[
				'Node.JS',
				'Angular',
				'Snowflake',
				'AWS Lambda',
				'Serverless Framework',
				'AWS Firehose',
				'AWS S3',
				'AWS S3 Glacier',
				'Redux',
				'React.js',
				'Heroku CI/CD',
				'Shopify API',
				'JIRA',
				'Confluence',
				'PostgreSQL'
			]}
			roles={[
				'Works on the ShopMessage and Commerceinspector client.',
				'Creates AWS Lambda jobs using Serverless framework.',
				'Maintains and implements new features for both products using React.js/Redux and Node.js.',
				'Lead the front-end implementation of Commerceinspector as a whole.',
				'Works on Commerceinspector from spec to release.',
				'Works on customer service feature requests and bugs reported.',
				'Handled CI/CD using Heroku'
			]}
		/>
		<hr class="w-full border-solid shadow-lg border-primary" />
		<Experience
			companyName="Infor PSSC, Philippines, Taguig City"
			jobTitle="Software Engineer"
			date="April 2016 - July 2019"
			technologiesUsed={[
				'React.js',
				'JAVA',
				'Infor GRID',
				'Cordova',
				'JIRA',
				'Confluence',
				'JQUERY',
				'Javascript',
				'C#',
				'Karma',
				'Jasmine',
				'AWS EC2',
				'Jenkins'
			]}
			roles={[
				'Lead the Customer Lifecycle Management (CLM), Team.',
				'Used React.js and Cordova for mobile development.',
				'Used JQuery and Javascript on the web application.',
				'Used WPF and C# on the Desktop application.',
				'Was part of the Mobility for Field Service App team when needed.',
				'Handled maintenance and new feature implementations for both MFS and CLM.',
				'Implemented Karma and Jasmine unit tests.',
				'Implemented CI integration with AWS EC2.',
				'Automated build jobs using Jenkins.',
				'Did peer reviews to maintain code quality and convention.',
				'Involved in task planning and estimations.',
				'Refactored the parts of the application to conform to new coding standards and improve code quality.'
			]}
		/>
		<hr class="w-full border-solid shadow-lg border-primary" />
		<Experience
			companyName="Medilink Network, Philippines, Makati City"
			jobTitle="Software Engineer I"
			date="September 2015 - May 2016"
			technologiesUsed={[
				'JIRA',
				'Confluence',
				'JQUERY',
				'Javascript',
				'C#',
				'PHP',
				'Codeigniter',
				'Laravel',
				'Jenkins',
				'WebSockets',
				'Node.js',
				'LAMP'
			]}
			roles={[
				'Created a chat application using WebSockets and PHP.',
				'Handled implementation of new features for a Call Center application specializing in healthcare.',
				'Involved in prototyping technologies to be used in the product, with node.js and PHP version 7 as backend.',
				'Mainly used javascript and jquery for front-end purposes and SASS.',
				'Created an in-house messaging tool for collaboration using PHP.',
				'Used Laravel and Codeigniter framework.'
			]}
		/>
		<hr class="w-full border-solid shadow-lg border-primary" />
		<Experience
			companyName="Accenture, Philippines, Quezon City"
			jobTitle="Software Engineer"
			date="April 2014 - May 2015"
			technologiesUsed={['Shell Scripting', 'Peoplsoft']}
			roles={[
				'Handled multiple Unix and Windows server management.',
				'Responsible for monitoring and patching Peoplesoft Environments',
				'Answered support calls for monitoring server health and uptime.',
				'Created multiple CRON jobs for automating mundane and repetitive management tasks.',
				'Handled logs compressing and retrieval from tapes.',
				'Deployed multiple Peoplesoft solutions for the client.',
				'Contributed multiple guides for new hires and team members.'
			]}
		/>
	</div>
</div>
