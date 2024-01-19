import { icons } from "lucide-react";

const Icon = ({ name, color, size }) => {
	const LucideIcon = icons[name];

	return LucideIcon ? <LucideIcon color={color} size={size} /> : null;
	return (
		<select name="icon">
			{names.map((name, i) => (
				<option key={i} valeu={name}>
					{name}
				</option>
			))}
		</select>
	);
};

export default Icon;
