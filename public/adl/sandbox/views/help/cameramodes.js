vwfPortalModel.help = {
	title: "Camera Modes",
	entries: [
		{
			title: "Orbit Camera (Camera->Orbit)",
			body:  "Orbit mode allows you to rotate the camera around a fixed point in space. This is useful to examine an object from many angles, and is the default camera mode. When in this mode, click and drag within the 3D view with the left mouse button to rotate. The system will prevent you from rotating the camera below the ground plane, and will not allow you to rotate the camera over the top of the object. This will prevent you from getting the camera upside down, and greatly increases usability. Press on your middle mouse button (or mouse wheel) and drag to pan the view. This will move the center of rotation around the scene. Drag left to pan to the right, and up to down. While this might seem counter intuitive, it will make sense if you think of it as moving the camera's center of rotation in the direction of mouse movement. Roll the mouse wheel to zoom in or out from the center.",
			icon: "camera.png"
		},
		{
			title: "First Person Camera (Camera->First Person)",
			body:  "The first person camera mode will orientate the camera behind your avatar. When in this mode, the mouse will not affect the camera placement. You may move your avatar with the W, A, S, and D keys. The camera will follow accordingly. When your avatar is inside a building or other enclosed space, the camera will move forward as necessary to avoid placing an object between your avatar and the camera.",
			icon: "firstperson.png"
		},
		{
			title: "Navigate Camera (Camera-> Navigate)",
			body:  "The Navigate camera mode is complex, but also powerful. It's best used to navigate around a large region of space. The left mouse button functions as it does in Orbit mode, rotating around a fixed point in space. The name 'Navigate' comes from the method of moving this center. Push down with the middle mouse button and pull the camera toward the bottom of the screen. This will move camera such that the point you clicked stays under the mouse pointer. If you click a point off on the horizon, pulling down will move you closer to that point. Likewise, you can click a point at your feet with the middle button, and push it toward the horizon. This moves you quickly back away from that point. Additionally, you can middle click a point and roll the mouse wheel. This moves the center of rotation to that exact point in space, and zooms into a fixed distance from that point. You can use this method to quickly frame a given point in space, even if that point is not the center of an object. If you simply want to focus on an object, you should select that object and use the 'Focus' button. This will center you and place the camera in Orbit mode.",
			icon: "navigate.png"
		},
		{
			title: "Free Camera (Camera-> Free)",
			body:  "The free camera mode allows a sort of first person perspective, but not attached to your avatar. Click and drag with the left mouse button to turn the view. Use the mouse wheel to move forward or back. Push the middle button and drag to pan the view. TODO: the middle drag should be more sensitive, and free mode should be allowed to look up.",
			icon: "free.png"
		},
		{
			title: "Focus (Camera->Focus Selected)",
			body:  "Move the camera such that it frames the selected object in the view. This will reset the camera mode to 'Orbit'. TODO: make sure the Orbit icon lights as selected when this is clicked.",
			icon: "target.png"
		}
	]
};