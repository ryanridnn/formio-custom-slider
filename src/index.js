import { Formio } from "formiojs";
import components from "./components";
import "./style.css";

Formio.use({
	components: {
		slider: components.slider,
	},
});

Formio.builder(
	document.querySelector(".builder "),
	{},
	{
		builder: {
			basic: {
				components: {
					slider: true,
				},
			},
		},
	}
).then((builder) => {
	Formio.createForm(document.querySelector(".renderer"), builder.form);
	builder.on("change", (schema) => {
		Formio.createForm(document.querySelector(".renderer"), schema);
	});
});
