import { BsTelephonePlusFill } from "react-icons/bs";

// import { IChildren } from "../../@types/@globalTypes";
import { HeaderDivStyled, HeaderStyled } from "./HeaderStyled";

export const Header = () => {
	return (
		<HeaderStyled>
			<HeaderDivStyled className="container__page">
				<h1 className="yellow__text">ContactBook</h1>
				<div className="navbar">
				 	<BsTelephonePlusFill className="yellow__text" size={30}/>
				</div>
				{/* {children} */}
			</HeaderDivStyled>
		</HeaderStyled>
	);
};