import { Formio } from "formiojs";
import components from "./components/customModule";
import "./style.css";

// Formio.use({
// 	components: {
// 		slider: components.slider,
// 		muitextfield: components.muitextfield,
// 		muinumberfield: components.muinumberfield,
// 	},
// });
Formio.use({ components });

Formio.builder(
	document.querySelector(".builder "),
	{},
	{
		builder: {
			muicomponents: {
				title: "Mui Components",
				default: true,
				components: {
					slider: true,
					muitextfield: true,
					muinumberfield: true,
					muipassword: true,
					muicheckbox: true,
				},
			},
			basic: {
				default: false,
			},
		},
	}
).then((builder) => {
	Formio.createForm(document.querySelector(".renderer"), builder.form);
	builder.on("change", (schema) => {
		Formio.createForm(document.querySelector(".renderer"), schema);
	});
});
