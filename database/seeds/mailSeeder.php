<?php

use Illuminate\Database\Seeder;
// use Spatie\MailTemplates\Models\MailTemplate;
// use App\Notifications\estimateNotification;
// use App\Notifications\paymentNotification;

class mailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // MailTemplate::create(
        //     [
        //         'mailable' => estimateNotification::class,
        //         'subject' => 'Request for your presence at {{ name }}',
        //         'html_template' => '<p>Hello, {{ mentor }}.</p>',
        //         'text_template' => ''
        //     ]
        // );

        // MailTemplate::create(
        //     [
        //         'mailable' => paymentNotification::class,
        //         'subject' => 'Request for your presence at {{ name }}',
        //         'html_template' => '<p>Hello, {{ mentor }}.</p>',
        //         'text_template' => ''
        //     ]
        // );
    }
}
