import AvatarComponent from "../components/Avatar_comp";
import OnboardingComp from "../components/ChatOnboarding_comp";

export default function Lobby() {
  return (
    <main className="min-h-screen flex  mx-auto max-w-screen-2xl overflow-x-hidden">
      <OnboardingComp />
      {/* <AvatarComponent/> */}
    </main>
  );
}
