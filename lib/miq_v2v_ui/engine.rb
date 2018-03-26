module MiqV2vUI
  class Engine < ::Rails::Engine
    isolate_namespace MiqV2vUI

    def vmdb_plugin?
      true
    end

    initializer 'plugin.assets' do |app|
      app.config.assets.paths << root.join('assets', 'images').to_s
    end

    initializer 'plugin' do
      Menu::CustomLoader.register(
          Menu::Item.new('overview', N_('Migration'), 'miq_report', {:feature => 'miq_report', :any => true}, '/migration', :default, :compute)
      )
    end
  end
end
