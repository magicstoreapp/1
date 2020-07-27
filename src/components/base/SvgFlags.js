import React from 'react'

const FlagSwitch = (flag) => {
	switch (flag.name) {
		case 'mn':
			return <MnFlag size={flag.size} color={flag.color} />;
		case 'chi':
			return <CnFlag size={flag.size} color={flag.color} />;
		case 'ko':
			return <KoFLag size={flag.size} color={flag.color} />;
		case 'en':
			return <UsFlag size={flag.size} color={flag.color} />;
		case 'ru':
			return <RuFlag size={flag.size} color={flag.color} />;


		default:
			return <MnFlag size={flag.size} color={flag.color} />;
	}
}
const Flag = ({ flag }) => (FlagSwitch(flag));

export const MnFlag = ({ size = 16, color = '#000000' }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 4800 2400"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g fill="#f9cf02">
			<g transform="scale(5)">
				<rect width="960" height="480" fill="#c4272f" />
				<rect x="320" width="320" height="480" fill="#015197" />
				<circle cx="160" cy="164" r="44" />
				<circle cx="160" cy="144" r="48" fill="#c4272f" />
				<circle cx="160" cy="152" r="32" />
				<path d="M140,92a20,20 0 0,0 40,0c0-8-5-9-5-12 0-3,3-7-3-12 3,5-2,6-2,11 0,5,2,5,2,9a4,4 0 0,1-8,0c0-4,4-8,4-14 0-6-1-8-4-13-3-5-8-9-4-13-6,2-3,10-3,15 0,5-4,8-4,14 0,6,3,7,3,11a4,4 0 0,1-8,0c0-4,2-4,2-9 0-5-5-6-2-11-6,5-3,9-3,12 0,3-5,4-5,12Z" />
				<path d="M72,216V408H112V216ZM208,216V408H248V216ZM120,248V264H200V248ZM120,360V376H200V360ZM120,216H200L160,240ZM120,384H200L160,408Z" />
			</g>
			<g stroke="#c4272f" stroke-width="24">
				<circle cx="800" cy="1560" r="212" />
				<path fill="none" d="M800,1348A106,106 0 0,1 800,1560A106,106 0 0,0 800,1772" />
			</g>
		</g>
		<g fill="#c4272f">
			<circle cx="800" cy="1454" r="40" />
			<circle cx="800" cy="1666" r="40" />
		</g>
	</svg>
)

export const CnFlag = ({ size = 16, color = '#000000' }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 4800 2400"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 30 20">
			<defs>
				<path id="s" d="M0,-1 0.587785,0.809017 -0.951057,-0.309017H0.951057L-0.587785,0.809017z" fill="#ffde00" />
			</defs>
			<rect width="30" height="20" fill="#de2910" />
			<use xlink="#s" transform="translate(5,5) scale(3)" />
			<use xlink="#s" transform="translate(10,2) rotate(23.036243)" />
			<use xlink="#s" transform="translate(12,4) rotate(45.869898)" />
			<use xlink="#s" transform="translate(12,7) rotate(69.945396)" />
			<use xlink="#s" transform="translate(10,9) rotate(20.659808)" />
		</svg>
		</svg>
)

export const KoFLag = ({ size = 16, color = '#000000'}) => (

		<svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="-36 -24 72 48">
			<title>Flag of South Korea</title>
			<rect fill="#fff" x="-36" y="-24" width="72" height="48" />
			<g transform="rotate(-56.3099325)">
				<g id="b2">
					<path id="b" d="M-6-25H6M-6-22H6M-6-19H6" stroke="#000" stroke-width="2" />
					<use xlink="#b" y="44" />
				</g>
				<path stroke="#fff" stroke-width="1" d="M0,17v10" />
				<circle fill="#c60c30" r="12" />
				<path fill="#003478" d="M0-12A6,6 0 0 0 0,0A6,6 0 0 1 0,12A12,12 0 0,1 0-12Z" />
			</g>
			<g transform="rotate(-123.6900675)">
				<use xlink="#b2" />
				<path stroke="#fff" stroke-width="1" d="M0-23.5v3M0,17v3.5M0,23.5v3" />
			</g>
		</svg>
)

export const UsFlag = ({ size = 16, color = '#000000'}) => (


		<svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 7410 3900">
			<rect width="7410" height="3900" fill="#b22234" />
			<path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300" />
			<rect width="2964" height="2100" fill="#3c3b6e" />
			<g fill="#fff">
				<g id="s18">
					<g id="s9">
						<g id="s5">
							<g id="s4">
								<path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z" />
								<use xlink="#s" y="420" />
								<use xlink="#s" y="840" />
								<use xlink="#s" y="1260" />
							</g>
							<use xlink="#s" y="1680" />
						</g>
						<use xlink="#s4" x="247" y="210" />
					</g>
					<use xlink="#s9" x="494" />
				</g>
				<use xlink="#s18" x="988" />
				<use xlink="#s9" x="1976" />
				<use xlink="#s5" x="2470" />
			</g>

		</svg>

)


export const RuFlag = ({ size = 16, color = '#000000'}) => (


		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
			<rect fill="#fff" width="9" height="3" />
			<rect fill="#d52b1e" y="3" width="9" height="3" />
			<rect fill="#0039a6" y="2" width="9" height="2" />

)
</svg>

)

export default Flag;