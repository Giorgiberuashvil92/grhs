'use client';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  courseCount: number;
  color: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'ფიზიკური რეაბილიტაცია',
    description: 'ფიზიკური აღდგენითი ვარჯიშები და თერაპია',
    icon: '🏃‍♂️',
    courseCount: 25,
    color: 'bg-blue-100 border-blue-200'
  },
  {
    id: '2',
    name: 'ოკუპაციური თერაპია',
    description: 'ყოველდღიური ცხოვრების უნარების აღდგენა',
    icon: '🛠️',
    courseCount: 18,
    color: 'bg-green-100 border-green-200'
  },
  {
    id: '3',
    name: 'ლოგოპედია',
    description: 'მეტყველების და კომუნიკაციის განვითარება',
    icon: '🗣️',
    courseCount: 22,
    color: 'bg-purple-100 border-purple-200'
  },
  {
    id: '4',
    name: 'ფსიქოლოგიური რეაბილიტაცია',
    description: 'ფსიქოლოგიური მხარდაჭერა და აღდგენა',
    icon: '🧠',
    courseCount: 15,
    color: 'bg-pink-100 border-pink-200'
  },
  {
    id: '5',
    name: 'კარდიო რეაბილიტაცია',
    description: 'გულის დაავადებების შემდგომი აღდგენა',
    icon: '❤️',
    courseCount: 12,
    color: 'bg-red-100 border-red-200'
  },
  {
    id: '6',
    name: 'ნევროლოგიური რეაბილიტაცია',
    description: 'ნერვული სისტემის აღდგენა',
    icon: '⚡',
    courseCount: 20,
    color: 'bg-yellow-100 border-yellow-200'
  },
  {
    id: '7',
    name: 'ორთოპედიული რეაბილიტაცია',
    description: 'ძვლებისა და სახსრების აღდგენა',
    icon: '🦴',
    courseCount: 16,
    color: 'bg-orange-100 border-orange-200'
  },
  {
    id: '8',
    name: 'პედიატრიული რეაბილიტაცია',
    description: 'ბავშვთა რეაბილიტაციული მომსახურება',
    icon: '👶',
    courseCount: 14,
    color: 'bg-indigo-100 border-indigo-200'
  }
];

export function CategoriesGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            რეაბილიტაციის კატეგორიები
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            აირჩიეთ თქვენთვის საინტერესო კატეგორია და დაიწყეთ სწავლა
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.color} p-6 rounded-xl border hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <span className="bg-white px-3 py-1 rounded-full">
                    {category.courseCount} კურსი
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-300 font-medium">
            ყველა კატეგორიის ნახვა
          </button>
        </div>
      </div>
    </section>
  );
} 