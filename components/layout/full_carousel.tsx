import CarrouselPhotos from "./carousel";

export function Signature() {
	return (
		<div className="w-60 h-60 rounded-full overflow-hidden border border-solid border-red-400">
			<img
				src="https://www.themarysue.com/wp-content/uploads/2013/07/pet.jpg?fit=600%2C450"
				alt="Signature Image"
				className="w-full h-full object-cover"
			/>
		</div>
		// <div
		//   className="w-60 h-60 rounded-full overflow-hidden border border-solid border-red-400"
		//   style={{ position: "absolute", zIndex: 2 }}
		// >
		//   <img
		//     src="https://www.themarysue.com/wp-content/uploads/2013/07/pet.jpg?fit=600%2C450"
		//     alt="Signature Image"
		//     className="w-full h-full object-cover"
		//   />
		// </div>
	);
}

export default function FullCarousel() {
	return (
		<div className="relative">
			<CarrouselPhotos />
			<div className="absolute top-0 left-0 flex z-1">
				<Signature />
			</div>
		</div>
	);
}
