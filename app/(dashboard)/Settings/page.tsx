import { Separator } from "@/registry/new-york/ui/separator";
import { ProfileForm } from "./profile-form";

export default function Settings() {
  return (
    <>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </>
  );
}
