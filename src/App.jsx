import VRView from './components/VRView';

export default function App() {
  return (
    <div class="min-h-screen flex flex-col md:flex-row relative">
      <div class="flex-1 h-full">
        <VRView />
      </div>
      <div class="flex-1 h-full">
        <VRView />
      </div>
      <div class="absolute bottom-4 right-4 text-sm text-gray-500 cursor-pointer">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">
          Made on ZAPT
        </a>
      </div>
    </div>
  );
}