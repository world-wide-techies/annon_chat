import AvatarComponent from "../components/Avatar_comp";
import OnboardingComp from "../components/ChatOnboarding_comp";

export default function Lobby() {
  return (
    <main className="min-h-screen flex  mx-auto w-full overflow-x-hidden max-w-screen-2xl">
      <OnboardingComp />
      
    </main>
  );
}
