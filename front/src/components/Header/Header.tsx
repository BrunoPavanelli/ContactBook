import { BsTelephonePlusFill } from "react-icons/bs";

// import { IChildren } from "../../@types/@globalTypes";
import { HeaderDivStyled, HeaderStyled } from "./HeaderStyled";
import { IChildrenOptional } from "../../@types/@globalTypes";

export const Header = ({ children}: IChildrenOptional) => {
	return (
		<HeaderStyled>
			<HeaderDivStyled className="container__page">
				<h1 className="yellow__text">ContactBook</h1>
				<div className="navbar">
					{children ? children : null}
				 	<BsTelephonePlusFill className="yellow__text" size={30}/>
				</div>
			</HeaderDivStyled>
		</HeaderStyled>
	);
};