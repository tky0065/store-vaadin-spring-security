import { ViewConfig } from '@vaadin/hilla-file-router/types.js';

export const config: ViewConfig = { menu: { order: 0, icon: 'line-awesome/svg/home-solid.svg' }, title: 'Home' };

export default function HomeView() {
  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
      <h2>This place intentionally left empty</h2>
      <p>It’s a place where you can grow your own UI 🤗</p>
    </div>
  );
}
