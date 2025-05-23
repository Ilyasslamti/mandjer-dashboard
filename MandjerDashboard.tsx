import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, Bot, CalendarClock, Settings, Flame } from "lucide-react";

export default function Mandjer360Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">لوحة قيادة الماندجر 360</h1>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList className="grid grid-cols-5 gap-2">
          <TabsTrigger value="dashboard"><BarChart3 className="w-4 h-4 inline mr-1" /> البيانات</TabsTrigger>
          <TabsTrigger value="campaigns"><CalendarClock className="w-4 h-4 inline mr-1" /> الحملات</TabsTrigger>
          <TabsTrigger value="ai"><Bot className="w-4 h-4 inline mr-1" /> المساعد الذكي</TabsTrigger>
          <TabsTrigger value="library"><Flame className="w-4 h-4 inline mr-1" /> المحتوى الفيروسي</TabsTrigger>
          <TabsTrigger value="settings"><Settings className="w-4 h-4 inline mr-1" /> الإعدادات</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">إحصائيات الأداء</h2>
              <p>عدد الزوار اليوم: 1,245</p>
              <p>أعلى منشور: "سر لا يعرفه أحد عن الربح في الليل"</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">إنشاء حملة جديدة</h2>
              <Input placeholder="اسم المنتج أو العرض" />
              <Textarea placeholder="تفاصيل الحملة أو رسالتها الرئيسية" />
              <Button>ولّد الحملة</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">مساعد الردود الذكي</h2>
              <Textarea placeholder="أدخل رسالة أو تعليق لتوليد الرد المناسب" />
              <Button>ولّد الرد</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="library">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">مكتبة المحتوى الفيروسي</h2>
              <p>استكشف، عدّل، وشارك منشورات مصممة للانتشار السريع</p>
              <Textarea placeholder="ابحث عن موضوع أو فكرة" />
              <Button>اكتشف منشورات نارية</Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">🔒 سر في التسويق يجعلك تربح وأنت نائم</h3>
                    <p className="text-sm">هذا النوع من المنشورات يخلق الفضول ويشجع على التفاعل الكبير</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">🚀 خطة غير معروفة للحصول على 1000 متابع في 48 ساعة</h3>
                    <p className="text-sm">منشور بأسلوب تحدي يحفز المشاركة والمشاركة الفيروسية</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">إعدادات التخصيص</h2>
              <Input placeholder="رابط صفحتك على الفيسبوك" />
              <Input placeholder="API Key الخاص بك" />
              <Button>حفظ الإعدادات</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
