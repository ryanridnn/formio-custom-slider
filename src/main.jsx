import { Formio, Components } from "formiojs";
import components from "./customComponents/customModule";
import "./style.css";
import "./overridedComponents";

Formio.use({ components });

Formio.builder(
	document.querySelector(".builder "),
	{},
	{
		builder: {
			// muicomponents: {
			// 	title: "Mui Components",
			// 	default: true,
			// 	components: {
			// 		slider: true,
			// 		muitextfield: true,
			// 		muinumberfield: true,
			// 		muipassword: true,
			// 		muicheckbox: true,
			// 	},
			// },
			basic: {
				default: false,
			},
		},
	}
).then((builder) => {
	Formio.createForm(document.querySelector(".renderer"), builder.form);
	// const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));
	builder.on("change", (schema) => {
		Formio.createForm(document.querySelector(".renderer"), schema);
	});
});
