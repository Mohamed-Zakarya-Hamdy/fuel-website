import React from "react";
import "./MainHero.css";
import Navbar1 from "../Navbar1/Navbar1";

const buildPublicImageUrl = (path) => {
	if (!path) return undefined;
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `${process.env.PUBLIC_URL || ""}${encodeURI(normalized)}`;
};

const MainHero = ({ backgroundImageUrl }) => {
	const url = buildPublicImageUrl(backgroundImageUrl);
	const style = url ? { backgroundImage: `url(${url})` } : undefined;
	return (
		<section className="main-hero" style={style}>
			<Navbar1 />
		</section>
	);
};

export default MainHero;
